<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [How to install docker image](#how-to-install-docker-image)
- [To build the image run:](#to-build-the-image-run)
- [To get the name of your images, run;](#to-get-the-name-of-your-images-run)
- [To run the container run the exclusive command:](#to-run-the-container-run-the-exclusive-command)
- [To stop the image with your terminal run:](#to-stop-the-image-with-your-terminal-run)

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
