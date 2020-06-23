FROM node:lts-alpine

RUN npm install pm2 -g \
 && pm2 install pm2-logrotate \
 && npm install typescript -g

COPY docker/nodejs/entrypoint-server.sh /usr/local/bin
RUN chmod -R 777 /usr/local/bin/entrypoint-server.sh

COPY docker/nodejs/entrypoint-microservices.sh /usr/local/bin
RUN chmod -R 777 /usr/local/bin/entrypoint-microservices.sh

ENV APP_HOME /application
WORKDIR $APP_HOME


