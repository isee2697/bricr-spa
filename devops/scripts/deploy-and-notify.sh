#!/bin/sh

function fail() {
    curl -X POST --data-urlencode "payload={\"channel\": \"#bricr-notifications\", \"username\": \"Pipelines\", \"text\": \"Hey! Your job <https://bitbucket.org/thesoftwarehouse/bricr-spa/addon/pipelines/home#!/results/${BITBUCKET_BUILD_NUMBER}|failed> :pepecry: check it please.\"}" "${SLACK_WEBHOOK}"
}

function success()  {
    curl -X POST --data-urlencode "payload={\"channel\": \"#bricr-notifications\", \"username\": \"Pipelines\", \"text\": \"Hey! Your job <https://bitbucket.org/thesoftwarehouse/bricr-spa/addon/pipelines/home#!/results/${BITBUCKET_BUILD_NUMBER}|finished successfully.> It should be live here ${URL} in a few minutes.\"}" "${SLACK_WEBHOOK}"
}

export TF_VAR_docker_tag=$BITBUCKET_COMMIT
export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
cd devops/terraform/staging/${PACKAGE}
terraform init && terraform validate && terraform fmt
terraform plan
terraform apply -auto-approve

if [ $? -ne 0 ]
then
    fail
else
    success
fi
