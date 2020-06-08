terraform {
  backend "s3" {
    bucket = "bricr-staging-application-state"
    key    = "terraform/bricr/staging-bricr-spa.tfstate"
    region = "eu-west-1"
  }

}
provider "aws" {
  region = "eu-west-1"
  version = "2.64"
}
