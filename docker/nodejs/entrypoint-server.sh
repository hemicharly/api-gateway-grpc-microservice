#!/usr/bin/env sh

cd $APP_HOME

echo "Install packaged..."
yarn

if [ "$NODE_ENV" != "production" ] && [ "$DEBUG" = '0' ]; then
  echo "Start development application server..."
  yarn dev
fi

if [ "$NODE_ENV" != "production" ] && [ "$DEBUG" = '1' ]; then
  echo "Start debug application server..."
  yarn debug
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