## Running the React App using Docker and Docker Compose
Prerequisites
Install Docker: https://www.docker.com/get-started

Install Docker Compose (usually bundled with Docker): https://docs.docker.com/compose/install/

## Step 1: Clone the React App Repository
Clone the React app repository to your local machine using Git.


### git clone <repository_url>
### cd <repository_directory>

## Step 2: Create Dockerfile and docker-compose.yml
Copy the provided Dockerfile and docker-compose.yml files into the root directory of your React app.

## Step 3: Build and Run the Docker Container
Open a terminal or command prompt in the same directory where the Dockerfile and docker-compose.yml are located.


### docker-compose build
### docker-compose up

## Step 4: Access the React App
Open your web browser and navigate to http://localhost:3000 to access the running React app.

Stopping the App
To stop the running containers, press Ctrl + C in the terminal where you ran docker-compose up.

Customization (Optional)
Development Volume Mount (Optional): If you want to synchronize code changes between your host machine and the container during development, uncomment the volumes section in the docker-compose.yml file and adjust the volume mapping as needed.

Custom Port Mapping (Optional): If you prefer to run the app on a different port, modify the port mapping in the docker-compose.yml file. Update both the host and container port numbers (e.g., "8080:3000" to run the app on http://localhost:8080).