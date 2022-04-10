# Nodejs docker image
FROM node:10-alpine
# Set a user node and set permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory

WORKDIR /home/node/app

#copy the package.json and package-lock.json
COPY package*.json ./

USER node
# Install dependences

RUN npm install

COPY --chown=node:node . .
# expose port
EXPOSE 4001

CMD [ "npm","run", "start" ]
