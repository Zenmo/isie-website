#!/bin/bash

# Exit on error
set -e

# Image name
IMAGE_NAME="ghcr.io/zenmo/isie-website:latest"

# Build the Docker image
echo "Building Docker image: $IMAGE_NAME..."
docker build -t "$IMAGE_NAME" .

# Push the Docker image
echo "Pushing Docker image: $IMAGE_NAME..."
docker push "$IMAGE_NAME"

echo "Done!"
