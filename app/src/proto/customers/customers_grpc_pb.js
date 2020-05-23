// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var customers_pb = require('./customers_pb.js');

function serialize_CustomersRequest(arg) {
  if (!(arg instanceof customers_pb.CustomersRequest)) {
    throw new Error('Expected argument of type CustomersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomersRequest(buffer_arg) {
  return customers_pb.CustomersRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_Empty(arg) {
  if (!(arg instanceof customers_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return customers_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerServiceService = exports.CustomerServiceService = {
  getAll: {
    path: '/CustomerService/GetAll',
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
    path: '/CustomerService/Get',
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
    path: '/CustomerService/Insert',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CustomersRequest,
    responseType: customers_pb.CustomersResponse,
    requestSerialize: serialize_CustomersRequest,
    requestDeserialize: deserialize_CustomersRequest,
    responseSerialize: serialize_CustomersResponse,
    responseDeserialize: deserialize_CustomersResponse,
  },
  update: {
    path: '/CustomerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: customers_pb.CustomersRequest,
    responseType: customers_pb.CustomersResponse,
    requestSerialize: serialize_CustomersRequest,
    requestDeserialize: deserialize_CustomersRequest,
    responseSerialize: serialize_CustomersResponse,
    responseDeserialize: deserialize_CustomersResponse,
  },
  remove: {
    path: '/CustomerService/Remove',
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

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
