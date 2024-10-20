#!/bin/bash

source ./config.sh

EXISTING_CONTAINER=$(docker ps -a -q --filter name=$CONTAINER_NAME)

if [ ! -z "$EXISTING_CONTAINER" ]; then
    echo "Arrêt et suppression du conteneur existant..."
    docker stop $CONTAINER_NAME > /dev/null 2>&1
    docker rm $CONTAINER_NAME > /dev/null 2>&1
fi

EXISTING_IMAGE=$(docker images -q $IMAGE_NAME)

if [ -z "$EXISTING_IMAGE" ]; then
    echo "Construction de l'image Docker..."
    docker build -t $IMAGE_NAME .
else
    echo "L'image $IMAGE_NAME existe déjà."
fi

echo "Lancement du conteneur $CONTAINER_NAME sur le port $PORT..."
docker run -d -p $PORT:4200 --name $CONTAINER_NAME $IMAGE_NAME

echo "Le projet est lancé et disponible sur le port $PORT."
