#!/bin/sh

DOCKER_APP_ENV="local"
while :; do
  case $1 in
  -a | --prod)
    DOCKER_APP_ENV="production"
    ;;
  *) break ;;
  esac
  shift
done
export DOCKER_APP_ENV="$DOCKER_APP_ENV"

if [ "$DOCKER_APP_ENV" = "production" ]; then
  DOCKER_USER="nginx"
  DOCKER_GROUP="www"
  COMPOSE_FILE="docker-compose.yml"
else
  DOCKER_USER="$(id -un)"
  DOCKER_GROUP="$(id -gn $DOCKER_USER)"
  COMPOSE_FILE="docker-compose.yml"
fi

DOCKER_UID="$(id -u $DOCKER_USER)"
DOCKER_GID="$(getent group $DOCKER_GROUP | cut -d: -f3)"

export DOCKER_USER
export DOCKER_UID
export DOCKER_GROUP
export DOCKER_GID

docker compose --file=docker-compose.yml --file="$COMPOSE_FILE" pull
docker compose --file=docker-compose.yml --file="$COMPOSE_FILE" up --build -d --remove-orphans