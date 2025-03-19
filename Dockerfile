# Use Node.js as the base image
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Install pnpm (as it seems you're using it based on your package.json)
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if exists)
COPY package.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm build

# Use Nginx to serve the static files
FROM nginx:alpine as production

# Copy built assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx configuration if you have a custom one
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
