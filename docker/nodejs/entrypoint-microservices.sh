#!/usr/bin/env sh

cd $APP_HOME

echo "Install packaged..."
yarn

echo "Start development application server..."
yarn dev;

exec "$@"