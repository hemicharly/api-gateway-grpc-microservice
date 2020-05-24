// package: 
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUsersControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: IUsersControllerService_IGetAll;
    get: IUsersControllerService_IGet;
    insert: IUsersControllerService_IInsert;
    update: IUsersControllerService_IUpdate;
    remove: IUsersControllerService_IRemove;
}

interface IUsersControllerService_IGetAll extends grpc.MethodDefinition<users_pb.Empty, users_pb.UsersResponseList> {
    path: string; // "/.UsersController/GetAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.Empty>;
    requestDeserialize: grpc.deserialize<users_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.UsersResponseList>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponseList>;
}
interface IUsersControllerService_IGet extends grpc.MethodDefinition<users_pb.UsersRequestId, users_pb.UsersResponse> {
    path: string; // "/.UsersController/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersRequestId>;
    requestDeserialize: grpc.deserialize<users_pb.UsersRequestId>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}
interface IUsersControllerService_IInsert extends grpc.MethodDefinition<users_pb.UsersInsertRequest, users_pb.UsersResponse> {
    path: string; // "/.UsersController/Insert"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersInsertRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UsersInsertRequest>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}
interface IUsersControllerService_IUpdate extends grpc.MethodDefinition<users_pb.UsersUpdateRequest, users_pb.UsersResponse> {
    path: string; // "/.UsersController/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersUpdateRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UsersUpdateRequest>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}
interface IUsersControllerService_IRemove extends grpc.MethodDefinition<users_pb.UsersRequestId, users_pb.Empty> {
    path: string; // "/.UsersController/Remove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersRequestId>;
    requestDeserialize: grpc.deserialize<users_pb.UsersRequestId>;
    responseSerialize: grpc.serialize<users_pb.Empty>;
    responseDeserialize: grpc.deserialize<users_pb.Empty>;
}

export const UsersControllerService: IUsersControllerService;

export interface IUsersControllerServer {
    getAll: grpc.handleUnaryCall<users_pb.Empty, users_pb.UsersResponseList>;
    get: grpc.handleUnaryCall<users_pb.UsersRequestId, users_pb.UsersResponse>;
    insert: grpc.handleUnaryCall<users_pb.UsersInsertRequest, users_pb.UsersResponse>;
    update: grpc.handleUnaryCall<users_pb.UsersUpdateRequest, users_pb.UsersResponse>;
    remove: grpc.handleUnaryCall<users_pb.UsersRequestId, users_pb.Empty>;
}

export interface IUsersControllerClient {
    getAll(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponseList) => void): grpc.ClientUnaryCall;
    getAll(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponseList) => void): grpc.ClientUnaryCall;
    getAll(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponseList) => void): grpc.ClientUnaryCall;
    get(request: users_pb.UsersRequestId, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    get(request: users_pb.UsersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    get(request: users_pb.UsersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    insert(request: users_pb.UsersInsertRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    insert(request: users_pb.UsersInsertRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    insert(request: users_pb.UsersInsertRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    update(request: users_pb.UsersUpdateRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    update(request: users_pb.UsersUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    update(request: users_pb.UsersUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    remove(request: users_pb.UsersRequestId, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: users_pb.UsersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: users_pb.UsersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class UsersControllerClient extends grpc.Client implements IUsersControllerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponseList) => void): grpc.ClientUnaryCall;
    public getAll(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponseList) => void): grpc.ClientUnaryCall;
    public getAll(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponseList) => void): grpc.ClientUnaryCall;
    public get(request: users_pb.UsersRequestId, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public get(request: users_pb.UsersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public get(request: users_pb.UsersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: users_pb.UsersInsertRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: users_pb.UsersInsertRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: users_pb.UsersInsertRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public update(request: users_pb.UsersUpdateRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public update(request: users_pb.UsersUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public update(request: users_pb.UsersUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public remove(request: users_pb.UsersRequestId, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: users_pb.UsersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: users_pb.UsersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.Empty) => void): grpc.ClientUnaryCall;
}
