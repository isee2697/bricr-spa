data "aws_ecs_cluster" "fargate-cluster" {
  cluster_name = var.aws_ecs_cluster_name
}
data "aws_iam_role" "aws_ecs_role" {
  name = var.aws_ecs_execute_role
}
data "aws_lb_listener" "listener" {
  arn = var.listener_arn
}
