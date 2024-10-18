<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [How to install docker image](#how-to-install-docker-image)
- [How to build the image:](#how-to-build-the-image)
- [How to get the name of your images:](#how-to-get-the-name-of-your-images)
- [How to run the container:](#how-to-run-the-container)
- [How to stop the image with the terminal:](#how-to-stop-the-image-with-the-terminal)
- [Other Docker commands](#other-docker-commands)
  - [nstall and run an image](#nstall-and-run-an-image)
  - [shows the running images](#shows-the-running-images)
  - [Shows all the images in your computer](#shows-all-the-images-in-your-computer)
  - [Get the id of an image](#get-the-id-of-an-image)
  - [Port binding](#port-binding)
  - [How to start a container using the id](#how-to-start-a-container-using-the-id)
  - [How to start a container using container name](#how-to-start-a-container-using-container-name)
  - [How to stop a container using the id](#how-to-stop-a-container-using-the-id)
  - [How to stop a container using container name](#how-to-stop-a-container-using-container-name)
  - [How to check the history/logs of a container](#how-to-check-the-historylogs-of-a-container)
  - [How to change the name of a container](#how-to-change-the-name-of-a-container)
  - [Interactive Terminal](#interactive-terminal)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# How to install docker image

Run the following command to install an version of docker image:

```docker
docker pull node:20-alpine
```

Added the code in your Dockerfile

Specify your node version `FROM node:20-alpine`

Create a directory `WORKDIR /server`

Include the folder in your docker `COPY . .`

Add node modules in your image `RUN npm install`

Include your port number `EXPOSE 3000`

Include your run command `CMD ["npm", "run", "dev"]`

```docker
FROM node:20-alpine
WORKDIR /server
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

# How to build the image:

```docker
docker build -t <image-name> .
```

# How to get the name of your images:

```docker
docker image
OR
docker images -a
OR
docker ps
```

# How to run the container:

Give the image a name, i.e, `docker run --name <image-name>`

Specify the port number, i.e, `-p 3000:3000`

Add the image name, i.e, `blogs-app-image`

```docker
docker run --name blogs-app-container -p 3000:3000 blogs-app-image
```

# How to stop the image with the terminal:

Get the name of your container, i.e, `blogs-app-container`

```docker
docker stop <container-name>
OR
docker kill <container-name>
```

# Other Docker commands

## nstall and run an image

docker run image-name:version i.e.

```docker
docker run alpine:3.20
```

## shows the running images

```docker
docker ps

docker ps -a
```

## Shows all the images in your computer

```docker
docker images
```

## Get the id of an image

```docker
docker run -d <image-name>
```

## Port binding

- run the image in a different port

```docker
docker run -p<your-port>:<default-port> .i.e.
docker run -p6000:6379
```

## How to start a container using the id

```docker
docker start <id of the container>
```

## How to start a container using container name

```docker
docker start <name of the container>
```

## How to stop a container using the id

```docker
docker stop <id of the container>
```

## How to stop a container using container name

```docker
docker stop <name of the container>
```

## How to check the history/logs of a container

```docker
docker logs <container-name> or docker logs <id>
```

## How to change the name of a container

```docker
docker run -d -p6000:6937 --name <name-your-want-to-give-the-container> redis:4.4
 .i.e.
 docker run -d -p6000:6937 --name redis-older redis:4.4
```

## Interactive Terminal

docker exec -it <id> /bin/bash or docker exec -it <container-name> /bin/bash

- i: Keeps the standard input open, allowing you to interact with the container.
- t: Allocates a pseudo-TTY (terminal), enabling you to get a terminal session, which is necessary for an interactive session.
- it: interactive terminal
  /bin/bash: This is the command you're executing inside the container.
- /bin/bash opens a Bash shell, which allows you to interact with the container’s file system, run commands, and explore the container's environment interactively.
