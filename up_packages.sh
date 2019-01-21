#!/bin/bash
source .env

docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" composer update -vvv
docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" php bin/console cache:clear --env=prod
docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" php bin/console cache:clear --env=dev