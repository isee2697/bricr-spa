resource "aws_lb_target_group" "main" {
  name                 = "${var.application_name}-${var.application_type}-${var.application_package}"
  port                 = var.container_port
  protocol             = var.container_protocol
  vpc_id               = var.vpc
  target_type          = "ip"
  deregistration_delay = var.deregistration_delay

  health_check {
    path                = var.health_check
    matcher             = var.health_check_matcher
    interval            = var.health_check_interval
    timeout             = var.health_check_timeout
    healthy_threshold   = 5
    unhealthy_threshold = 5
  }

  tags = local.tags
}

resource "aws_lb_listener_rule" "host_based_routing" {
  listener_arn = var.listener_arn

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.main.arn
  }

  condition {
    host_header {
      values = var.hosts
    }
  }
}
