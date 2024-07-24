# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose the port serve runs on
EXPOSE 5000

# Start the application
CMD ["serve", "-s", "dist"]
