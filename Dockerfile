# Stage 1: Build the site
FROM node:lts-alpine AS builder

WORKDIR /app

# Copy package management files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the site
RUN npm run build

# Stage 2: Serve the site
FROM lipanski/docker-static-website:latest

# Copy built site from builder stage
# Astro by default builds to the 'dist' folder
COPY --from=builder /app/dist .
