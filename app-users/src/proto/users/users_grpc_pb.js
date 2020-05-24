// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof users_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersInsertRequest(arg) {
  if (!(arg instanceof users_pb.UsersInsertRequest)) {
    throw new Error('Expected argument of type UsersInsertRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersInsertRequest(buffer_arg) {
  return users_pb.UsersInsertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersLoginRequest(arg) {
  if (!(arg instanceof users_pb.UsersLoginRequest)) {
    throw new Error('Expected argument of type UsersLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersLoginRequest(buffer_arg) {
  return users_pb.UsersLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersRequestId(arg) {
  if (!(arg instanceof users_pb.UsersRequestId)) {
    throw new Error('Expected argument of type UsersRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersRequestId(buffer_arg) {
  return users_pb.UsersRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersResponse(arg) {
  if (!(arg instanceof users_pb.UsersResponse)) {
    throw new Error('Expected argument of type UsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersResponse(buffer_arg) {
  return users_pb.UsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersResponseList(arg) {
  if (!(arg instanceof users_pb.UsersResponseList)) {
    throw new Error('Expected argument of type UsersResponseList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersResponseList(buffer_arg) {
  return users_pb.UsersResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersUpdateRequest(arg) {
  if (!(arg instanceof users_pb.UsersUpdateRequest)) {
    throw new Error('Expected argument of type UsersUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersUpdateRequest(buffer_arg) {
  return users_pb.UsersUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  getAll: {
    path: '/Users/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.Empty,
    responseType: users_pb.UsersResponseList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_UsersResponseList,
    responseDeserialize: deserialize_UsersResponseList,
  },
  get: {
    path: '/Users/Get',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UsersRequestId,
    responseType: users_pb.UsersResponse,
    requestSerialize: serialize_UsersRequestId,
    requestDeserialize: deserialize_UsersRequestId,
    responseSerialize: serialize_UsersResponse,
    responseDeserialize: deserialize_UsersResponse,
  },
  insert: {
    path: '/Users/Insert',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UsersInsertRequest,
    responseType: users_pb.UsersResponse,
    requestSerialize: serialize_UsersInsertRequest,
    requestDeserialize: deserialize_UsersInsertRequest,
    responseSerialize: serialize_UsersResponse,
    responseDeserialize: deserialize_UsersResponse,
  },
  update: {
    path: '/Users/Update',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UsersUpdateRequest,
    responseType: users_pb.UsersResponse,
    requestSerialize: serialize_UsersUpdateRequest,
    requestDeserialize: deserialize_UsersUpdateRequest,
    responseSerialize: serialize_UsersResponse,
    responseDeserialize: deserialize_UsersResponse,
  },
  remove: {
    path: '/Users/Remove',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UsersRequestId,
    responseType: users_pb.Empty,
    requestSerialize: serialize_UsersRequestId,
    requestDeserialize: deserialize_UsersRequestId,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  login: {
    path: '/Users/Login',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UsersLoginRequest,
    responseType: users_pb.UsersResponse,
    requestSerialize: serialize_UsersLoginRequest,
    requestDeserialize: deserialize_UsersLoginRequest,
    responseSerialize: serialize_UsersResponse,
    responseDeserialize: deserialize_UsersResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
