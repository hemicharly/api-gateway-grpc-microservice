#!/usr/bin/env sh

cd /opt/app

echo "Install packaged..."
yarn

if [ "$NODE_ENV" = "development" ]; then
  echo "Start development application server..."
  yarn dev
fi

if [ "$NODE_ENV" = "production" ]; then
  echo "Creating paths..."
  mkdir -p $APP_HOME/logs;
  mkdir -p $APP_HOME/build;

  yarn clean && yarn build;

  # Copy files *.proto
  cp -R $APP_HOME/src/config/grpc/proto/ $APP_HOME/build/src/config/grpc/

  echo "Start production application server..."
  yarn start;
fi

exec "$@"