#!/usr/bin/env sh

cd /opt/app

echo "Install packaged..."
yarn

echo "Start application server..."
yarn dev

exec "$@"