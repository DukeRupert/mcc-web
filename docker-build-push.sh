#!/bin/bash

# Script to build and push Docker image to Docker Hub

# Set variables
IMAGE_NAME="mcc-web"
VERSION=$(grep '"version":' package.json | cut -d'"' -f4)
DOCKER_HUB_USERNAME="dukerupert" # Replace with your Docker Hub username
REPOSITORY="$DOCKER_HUB_USERNAME/$IMAGE_NAME"

# Display the information
echo "Building Docker image: $REPOSITORY:$VERSION"

# Build the Docker image
docker build -t $REPOSITORY:$VERSION .

# Also tag as latest
docker tag $REPOSITORY:$VERSION $REPOSITORY:latest

# Login to Docker Hub (you'll be prompted for your password)
# You can also use DOCKER_PASSWORD environment variable or docker login before running this script
echo "Logging in to Docker Hub as $DOCKER_HUB_USERNAME"
docker login -u $DOCKER_HUB_USERNAME

# Push the images to Docker Hub
echo "Pushing image to Docker Hub: $REPOSITORY:$VERSION"
docker push $REPOSITORY:$VERSION

echo "Pushing image to Docker Hub: $REPOSITORY:latest"
docker push $REPOSITORY:latest

echo "Done! Your image has been built and pushed to Docker Hub."
echo "You can pull it using: docker pull $REPOSITORY:$VERSION"
