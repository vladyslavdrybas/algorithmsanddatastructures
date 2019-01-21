#!/bin/bash
source .env

if [ ! "$(docker network ls | grep ${PROXY_NETWORK_DEFAULT})" ]; then
    docker network create --driver=bridge "${PROXY_NETWORK_DEFAULT}"
fi

docker-compose config
docker-compose stop
docker-compose build --force-rm
docker-compose up --detach
docker container ls

docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" composer update
docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" php bin/console cache:clear --env=prod
docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" php bin/console cache:clear --env=dev

docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" bin/console doctrine:migrations:migrate -n

docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" php bin/console cache:clear --env=prod
docker container exec -it "$PROJECT_ALIAS.$BACKEND_SERVICE_NAME" php bin/console cache:clear --env=dev

sudo rm -r -f ${BACKEND_FOLDER}/var/cache