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

EXISTING_IMAGE=$(docker images -q $IMAGE_NAME)

if [ ! -z "$EXISTING_IMAGE" ]; then
    echo "Suppression de l'image $IMAGE_NAME..."
    docker rmi $IMAGE_NAME > /dev/null 2>&1
else
    echo "Aucune image trouvée avec le nom $IMAGE_NAME."
fi
