locals {
  web_log_group_name       = "/fargate/service/${var.application_name}-${var.application_type}-${var.application_package}/web"
  web_container_definition = <<DEFINITION
[
  {
    "name": "web",
    "image": "${local.docker_image}",
    "essential": true,
    "portMappings": [
      {
        "protocol": "tcp",
        "containerPort": ${var.container_port},
        "hostPort": ${var.container_port}
      }
    ],
    "environment": ${jsonencode(local.web_envs)},
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${local.web_log_group_name}",
        "awslogs-region": "eu-west-1",
        "awslogs-stream-prefix": "ecs"
      }
    }
  }
]
DEFINITION
}

resource "aws_cloudwatch_log_group" "web_service_log_group" {
  name              = local.web_log_group_name
  retention_in_days = 30
  tags              = local.tags
  depends_on        = [aws_ecs_task_definition.web]
}

resource "aws_ecs_task_definition" "web" {
  family                   = "${var.application_name}-${var.application_type}-${var.application_package}"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = data.aws_iam_role.aws_ecs_role.arn
  container_definitions    = local.web_container_definition
  tags                     = local.tags
}

resource "aws_ecs_service" "web_service" {
  name            = "${var.application_name}-${var.application_type}-${var.application_package}"
  cluster         = data.aws_ecs_cluster.fargate-cluster.arn
  launch_type     = "FARGATE"
  task_definition = aws_ecs_task_definition.web.arn
  desired_count   = var.replicas
  depends_on      = [aws_ecs_task_definition.web]
  network_configuration {
    security_groups  = var.aws_ecs_service_security_groups
    assign_public_ip = true
    subnets = split(
      ",",
      var.aws_subnets,
    )
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.main.arn
    container_name   = "web"
    container_port   = var.container_port
  }
  lifecycle {
    ignore_changes = [desired_count]
  }
}
