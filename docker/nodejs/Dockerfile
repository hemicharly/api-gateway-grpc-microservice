FROM node:lts-alpine

RUN yarn global add pm2 typescript \
 && pm2 install pm2-logrotate

COPY docker/nodejs/entrypoint-server.sh /usr/local/bin
COPY docker/nodejs/entrypoint-microservices.sh /usr/local/bin

USER node

ENV APP_HOME /application
WORKDIR $APP_HOME


