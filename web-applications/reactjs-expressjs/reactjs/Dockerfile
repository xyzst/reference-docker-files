# Production Dockerfile (multi stage/phase build)

# At the very least a Dockerfile has the following ...

# I: a base image defined by the FROM instruction
#   - Images usually pulled from Dockerhub, but can be pulled from private registry
#   - Images can be specialized for certain use cases (eg, alpine with node pre-installed)
#   - In a multi-stage build, aliases defined with the 'as' keyword makes it easier to reference artifacts generated in previous phases
FROM node:alpine as builder
# LABEL instruction is optional
LABEL maintainer="Darren Rambaud"
# WORKDIR instruction is optional, however it is best practice specify a working directory to avoid collisions with image file system
WORKDIR /app
# II: 0 or more instructions to install dependencies on the image or transfer files from host to container
COPY package.json ./
# These lines are purely work/environment setting specific. May be required if you receive proxy related errors during `npm install`
# RUN npm config set http-proxy http://username:password@proxy.corporate.com
# RUN npm config set https-proxy https://username:password@proxy.corporate.com
RUN npm install

# Note: This extra COPY instruction is for copying any source code changes to the container. Does not bust or invalidate the cache for instructions at lines 14 and 18
COPY ./ ./

# Build the project (output to -->WORKDIR/build)
RUN npm run build

# Begin second phase ...
FROM nginx
# Leverage nginx to serve static html/css (reactjs project). Much easier to scale, rather than having the router nginx container serve static content and route the requests
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy generated artifact from builder phase. With this nginx image, static content must be copied to /usr/share/nginx/html
# see: https://hub.docker.com/_/nginx
COPY --from=builder /app/build /usr/share/nginx/html

# With this nginx image, it is NOT necessary to define a startup command with CMD