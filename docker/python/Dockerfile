FROM grpc/python

RUN pip install --upgrade pip \
 && pip install grpcio grpcio-tools

ENV APP_HOME /opt/app

WORKDIR $APP_HOME

COPY docker/python/entrypoint-server.sh /usr/local/bin
RUN chmod -R 777 /usr/local/bin/entrypoint-server.sh