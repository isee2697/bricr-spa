#!/bin/sh

export PHRASE_PROJECT_ID=$PHRASE_PROJECT_ID
export PHRASE_ACCES_TOKEN=$PHRASE_ACCES_TOKEN

docker build -t 158856956003.dkr.ecr.eu-west-1.amazonaws.com/bricr-spa:$BITBUCKET_COMMIT-dev --build-arg PHRASE_PROJECT_ID=$PHRASE_PROJECT_ID --build-arg PHRASE_ACCES_TOKEN=$PHRASE_ACCES_TOKEN -f devops/docker/Dockerfile.dev .