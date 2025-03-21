# Use Node.js as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if exists)
COPY package.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies with more verbose output
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the application
COPY . .

# Define build arg with a default value that can be overridden
ARG PUBLIC_DIRECTUS_URL=https://content.manifoldcollective.com

# Set environment variable from build arg
ENV PUBLIC_DIRECTUS_URL=${PUBLIC_DIRECTUS_URL}

# Create .env file with Directus configuration
RUN echo "PUBLIC_DIRECTUS_URL=${PUBLIC_DIRECTUS_URL}" > .env

# Build with more verbose output
RUN pnpm build || (echo "Build failed. See error above." && exit 1)

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the application
CMD ["node", "build"]
