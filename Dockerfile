# Use Node.js as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm (as it seems you're using it based on your package.json)
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if exists)
COPY package.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies with more verbose output
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the application
COPY . .

# Create .env file with Directus configuration
RUN echo "PUBLIC_DIRECTUS_URL=http://directus:8055" > .env

# Build with more verbose output
RUN pnpm build || (echo "Build failed. See error above." && exit 1)

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the application
CMD ["node", "build"]
