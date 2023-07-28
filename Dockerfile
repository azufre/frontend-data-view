# Use the official Node.js image as the base image
FROM node:14 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if using npm) to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the application's code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight HTTP server to serve the built app
FROM node:14-alpine

# Install the 'serve' package globally
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /app

# Copy the built React app from the builder stage to the container
COPY --from=builder /app/build .

# Expose the port on which the app will run (change this if your app uses a different port)
EXPOSE 3000

# Start the app using the 'serve' command
CMD ["serve", "-s", "."]