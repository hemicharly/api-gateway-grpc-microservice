FROM node:lts-alpine

ENV APP_HOME /opt/app

WORKDIR $APP_HOME

COPY docker/nodejs/entrypoint-server.sh /usr/local/bin
RUN chmod -R 777 /usr/local/bin/entrypoint-server.sh
