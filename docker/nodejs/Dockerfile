FROM node:lts-alpine

RUN npm install pm2 -g \
 && pm2 install pm2-logrotate

RUN npm install typescript -g

ENV APP_HOME /opt/app

WORKDIR $APP_HOME

COPY docker/nodejs/entrypoint-server.sh /usr/local/bin
RUN chmod -R 777 /usr/local/bin/entrypoint-server.sh
