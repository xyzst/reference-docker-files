# At the very least a Dockerfile has the following ...

# I: a base image defined by the FROM instruction
#   - Images usually pulled from Dockerhub, but can be pulled from private registry
#   - Images can be specialized for certain use cases (eg, alpine with node pre-installed)
FROM node:alpine
# LABEL instruction is optional
LABEL maintainer="Darren Rambaud"
# WORKDIR instruction is optional, however it is best practice specify a working directory to avoid collisions with image file system
WORKDIR /app
# II: 0 or more instructions to install dependencies on the image or transfer files from host to container
COPY package.json .
RUN npm install

# Note: This extra COPY instruction is for copying any source code changes to the container. Does not bust or invalidate the cache for instructions at lines 9 and 10
COPY . .

# III: Lastly, a command to execute after the image was successfully built
CMD ["npm", "run", "start"]