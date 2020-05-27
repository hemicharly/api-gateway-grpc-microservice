#!/usr/bin/env sh

cd src

echo "Generate the go module with file proto"
protoc -I proto/ proto/orders.proto --go_out=plugins=grpc:proto

echo "Start application microservice go..."

go run main.go

exec "$@"