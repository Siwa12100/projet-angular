#!/bin/bash

source ./config.sh

EXISTING_CONTAINER=$(docker ps -a -q --filter name=$CONTAINER_NAME)

if [ ! -z "$EXISTING_CONTAINER" ]; then
    echo "Arrêt du conteneur $CONTAINER_NAME..."
    docker stop $CONTAINER_NAME > /dev/null 2>&1

    echo "Suppression du conteneur $CONTAINER_NAME..."
    docker rm $CONTAINER_NAME > /dev/null 2>&1
else
    echo "Aucun conteneur trouvé avec le nom $CONTAINER_NAME."
fi
