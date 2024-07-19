
```markdown
# Simple Static File Server with Docker

This project sets up a simple static file server using a Node.js runtime and `http-server` to serve HTML, CSS, and JavaScript files.

## Prerequisites

Make sure you have Docker installed on your machine. You can download and install Docker from [here](https://www.docker.com/products/docker-desktop).

## Building the Docker Image

1. Open a terminal or command prompt.
2. Navigate to the directory containing the Dockerfile.
3. Run the following command to build the Docker image:

   ```sh
   docker build -t simple-static-server .
```


## Running the Docker Container

Once the Docker image is built, you can run a container using the following command:

```sh
docker run -d -p 8080:8080 simple-static-server
```

This command will start a new container from the `simple-static-server` image, mapping port 8080 of the container to port 8080 on your local machine. The `-d` flag runs the container in detached mode.

## Accessing the Server

After running the container, open your web browser and navigate to `http://localhost:8080`. You should see the static files being served.

## Stopping the Docker Container

To stop the running container, first find the container ID using the following command:

```sh
docker ps
```

Then, stop the container using the `docker stop` command followed by the container ID:

```sh
docker stop <container_id>
```

Replace `<container_id>` with the actual container ID from the `docker ps` output.

## Cleaning Up

To remove the Docker container, use the following command:

```sh
docker rm <container_id>
```

To remove the Docker image, use the following command:

```sh
docker rmi simple-static-server
```

## 


