##############################
####### Variables
##############################
variable docker_tag {
  type = string
}
variable project_name {
  default = "Bricr"
}

variable project_environment {
  default = "staging"
}
variable tags {
  default = {
    Terraform   = "true"
    Project     = "Bricr"
    Environment = "Staging"
    Maintainer  = "TheSoftwareHouse"
  }
}
