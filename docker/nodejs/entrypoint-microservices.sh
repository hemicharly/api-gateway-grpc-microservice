#!/usr/bin/env sh

cd /opt/app

echo "Install packaged..."
yarn

echo "Start development application server..."
yarn dev;

exec "$@"