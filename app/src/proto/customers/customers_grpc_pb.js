// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var customers_pb = require('./customers_pb.js');

function serialize_CustomersInsertRequest(arg) {
  if (!(arg instanceof customers_pb.CustomersInsertRequest)) {
    throw new Error('Expected argument of type CustomersInsertRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomersInsertRequest(buffer_arg) {
  return customers_pb.CustomersInsertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CustomersRequestId(arg) {
  if (!(arg instanceof customers_pb.CustomersRequestId)) {
    throw new Error('Expected argument of type CustomersRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomersRequestId(buffer_arg) {
  return customers_pb.CustomersRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CustomersResponse(arg) {
  if (!(arg instanceof customers_pb.CustomersResponse)) {
    throw new Error('Expected argument of type CustomersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomersResponse(buffer_arg) {
  return customers_pb.CustomersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CustomersResponseList(arg) {
  if (!(arg instanceof customers_pb.CustomersResponseList)) {
    throw new Error('Expected argument of type CustomersResponseList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomersResponseList(buffer_arg) {
  return customers_pb.CustomersResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CustomersUpdateRequest(arg) {
  if (!(arg instanceof customers_pb.CustomersUpdateRequest)) {
    throw new Error('Expected argument of type CustomersUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomersUpdateRequest(buffer_arg) {
  return customers_pb.CustomersUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof customers_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return customers_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomersControllerService = exports.CustomersControllerService = {
  getAll: {
    path: '/CustomersController/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.Empty,
    responseType: customers_pb.CustomersResponseList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_CustomersResponseList,
    responseDeserialize: deserialize_CustomersResponseList,
  },
  get: {
    path: '/CustomersController/Get',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CustomersRequestId,
    responseType: customers_pb.CustomersResponse,
    requestSerialize: serialize_CustomersRequestId,
    requestDeserialize: deserialize_CustomersRequestId,
    responseSerialize: serialize_CustomersResponse,
    responseDeserialize: deserialize_CustomersResponse,
  },
  insert: {
    path: '/CustomersController/Insert',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CustomersInsertRequest,
    responseType: customers_pb.CustomersResponse,
    requestSerialize: serialize_CustomersInsertRequest,
    requestDeserialize: deserialize_CustomersInsertRequest,
    responseSerialize: serialize_CustomersResponse,
    responseDeserialize: deserialize_CustomersResponse,
  },
  update: {
    path: '/CustomersController/Update',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CustomersUpdateRequest,
    responseType: customers_pb.CustomersResponse,
    requestSerialize: serialize_CustomersUpdateRequest,
    requestDeserialize: deserialize_CustomersUpdateRequest,
    responseSerialize: serialize_CustomersResponse,
    responseDeserialize: deserialize_CustomersResponse,
  },
  remove: {
    path: '/CustomersController/Remove',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CustomersRequestId,
    responseType: customers_pb.Empty,
    requestSerialize: serialize_CustomersRequestId,
    requestDeserialize: deserialize_CustomersRequestId,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
};

exports.CustomersControllerClient = grpc.makeGenericClientConstructor(CustomersControllerService);
