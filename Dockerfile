# Use Node.js as the base image
FROM node:latest as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install --force

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port 5173
EXPOSE 5173

# Command to start the application
CMD ["npm", "run", "dev"]
