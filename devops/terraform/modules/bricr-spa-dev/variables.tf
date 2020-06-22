##############################
####### Variables
##############################

variable "aws_ecs_cluster_name" {}
variable "aws_ecs_execute_role" {}
variable "vpc" {}
variable "aws_subnets" {
  default = ""
}
variable hosts {
  type = list
}
variable "listener_arn" {}

variable "application_name" {
  default = "Bricr-App"
}

variable "application_type" {
  default = "Dev"
}

variable "application_package" {
  default = "spa-develop"
}

# The AWS region to use for the dev environment's infrastructure
variable "region" {
  default = "eu-west-1"
}

variable "container_port" {
  type    = number
  default = 3000
}

variable "container_protocol" {
  type    = string
  default = "HTTP"
}

variable "aws_ecs_service_security_groups" {
  default = [""]
}

variable tags {
  default = {
    Terraform  = "true"
    Project    = "Bricr"
    Maintainer = "TheSoftwareHouse"
  }
}

variable "web_envs" {
  type = list
  default = [
    { "name" : "ENV_EXAMPLE",
      "value" : "web"
    },
    {
      "name" : "SECOND_ENV"
      "value" : "web"
    }
  ]
}


variable "replicas" {
  default = "1"
}

# The minimum number of containers that should be running.
# Must be at least 1.
# used by both autoscale-perf.tf and autoscale.time.tf
# For production, consider using at least "2".
// variable "ecs_autoscale_min_instances" {
//   default = "1"
// }

// # The maximum number of containers that should be running.
// # used by both autoscale-perf.tf and autoscale.time.tf
// variable "ecs_autoscale_max_instances" {
//   default = "5"
// }

// # If the average CPU utilization over a minute drops to this threshold,
// # the number of containers will be reduced (but not below ecs_autoscale_min_instances).
// variable "ecs_as_cpu_low_threshold_per" {
//   default = "10"
// }

// # If the average CPU utilization over a minute rises to this threshold,
// # the number of containers will be increased (but not above ecs_autoscale_max_instances).
// variable "ecs_as_cpu_high_threshold_per" {
//   default = "80"
// }
// # If the average Memory utilization over a minute drops to this threshold,
// # the number of containers will be reduced (but not below ecs_autoscale_min_instances).
// variable "ecs_as_memory_low_threshold_per" {
//   default = "15"
// }

// # If the average Memory utilization over a minute rises to this threshold,
// # the number of containers will be increased (but not above ecs_autoscale_max_instances).
// variable "ecs_as_memory_high_threshold_per" {
//   default = "60"
// }

# Docker repository url
variable "docker_repository" {
  default = "158856956003.dkr.ecr.eu-west-1.amazonaws.com/bricr-spa"
}
variable "docker_tag" {}

## Target Group Variables

variable "deregistration_delay" {
  default = "30"
}

# The path to the health check for the load balancer to know if the container(s) are ready
variable "health_check" {
  default = "/auth/login"
}

# How often to check the liveliness of the container
variable "health_check_interval" {
  default = "30"
}

# How long to wait for the response on the health check path
variable "health_check_timeout" {
  default = "10"
}

# What HTTP response code to listen for
variable "health_check_matcher" {
  default = "200, 304"
}

// # SNS Topic ARN
// variable "sns_notifications_topic" {
//   default = "devops-notifications"
// }

##############################
####### Locals
##############################
locals {
  docker_image = "${var.docker_repository}:${var.docker_tag}"
  web_envs     = distinct(concat(var.web_envs, local.app_envs))
  tags = merge(
    var.tags,
    map(
      "Application", var.application_name,
      "ApplicationType", var.application_type,
      "TerraformModule", "bricr-spa-dev",
      "TerraformModuleRepository", "bricr-infrastructure"
    )
  )
  app_envs = list(
    {
      "name" : "LOG_CHANNEL"
      "value" : "stderr"
    }
  )
}
locals {

}
