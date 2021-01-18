module "bricr-spa" {
  source                          = "../../modules/bricr-spa"
  application_name                = "bricr"
  application_type                = "staging"
  tags                            = var.tags
  aws_ecs_cluster_name            = "bricr-staging"
  aws_ecs_execute_role            = "bricr-staging-ecs"
  vpc                             = "vpc-0db0c5b533e8cf425"
  aws_subnets                     = "subnet-0a416afb045595852,subnet-0ed866b3ec7ebe5e7"
  aws_ecs_service_security_groups = ["sg-03088064b22efe11c"]
  listener_arn                    = "arn:aws:elasticloadbalancing:eu-west-1:158856956003:listener/app/bricr-staging/30eb0f5a4014c299/966d84860e1d8a74"
  hosts                           = ["staging.dev-domain.nl"]
  docker_tag                      = var.docker_tag
  health_check_matcher            = "200"
  health_check                    = "/"
  container_port                  = 3000
  web_envs = [
    { "name" : "LOG_CHANNEL",
      "value" : "stderr"
    },
    { "name" : "REACT_APP_API_URL",
      "value" : "https://staging-api.dev-domain.nl/graphql"
    },
    { "name" : "REACT_APP_DEFAULT_LOCALE",
      "value" : "en"
    },
    { "name" : "REACT_APP_SECURITY_URL",
      "value" : "https://ay1sn7qxk8.execute-api.eu-west-1.amazonaws.com/staging"
    },
    { "name" : "REACT_APP_FILE_URL",
      "value" : "https://6ey54pre9l.execute-api.eu-west-1.amazonaws.com/staging"
    }
  ]
}
