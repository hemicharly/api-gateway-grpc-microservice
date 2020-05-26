#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../

echo "Generator proto products gRPC...";

python -m grpc_tools.protoc \
--proto_path=./src/proto \
--python_out=./src/proto \
--grpc_python_out=./src/proto \
./src/proto/products/products.proto




