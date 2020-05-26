#!/usr/bin/env sh

echo "Start application server..."

python $APP_HOME/src/server.py 50053

exec "$@"