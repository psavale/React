# Dockerfile for Node Applications
FROM node:12.18.3
ENV NODE_ENV=production

RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]

WORKDIR /app

#RUN adduser --uid 10101 -S commonUser
#USER node
# Copy local directory into workspace
COPY package*.json ./
RUN yarn
RUN npm rebuild node-sass --force
COPY . .

#RUN chown -R 10101 /app
#RUN chown -R node:node ./node_modules
#USER 10101

EXPOSE 5555
#CMD [ "npm", "install", "--production", "&&", "npm", "rebuild", "node-sass", "&&", "node", "server.js" ]
CMD ["node", "server.js" ]
# max-http-header-size override of the Node.js default to support larger headers
# CMD ["node", "--max-http-header-size=24576", "."]
