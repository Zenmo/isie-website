#!/bin/bash

# Exit on error
set -e

cd $(dirname "$0")

# Image name
IMAGE_NAME="ghcr.io/zenmo/isie-website:latest"

# Build the Docker image
echo "Building container image: $IMAGE_NAME..."
podman build \
    --file Dockerfile \
    --tag "$IMAGE_NAME" \
    ..

# Push the Docker image
echo "Pushing container image: $IMAGE_NAME..."
podman push "$IMAGE_NAME"

echo "Done!"
