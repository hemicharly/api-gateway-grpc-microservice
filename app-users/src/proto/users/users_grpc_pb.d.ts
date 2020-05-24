// package: 
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: IUsersService_IGetAll;
    get: IUsersService_IGet;
    insert: IUsersService_IInsert;
    update: IUsersService_IUpdate;
    remove: IUsersService_IRemove;
    login: IUsersService_ILogin;
}

interface IUsersService_IGetAll extends grpc.MethodDefinition<users_pb.Empty, users_pb.UsersResponseList> {
    path: string; // "/.Users/GetAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.Empty>;
    requestDeserialize: grpc.deserialize<users_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.UsersResponseList>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponseList>;
}
interface IUsersService_IGet extends grpc.MethodDefinition<users_pb.UsersRequestId, users_pb.UsersResponse> {
    path: string; // "/.Users/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersRequestId>;
    requestDeserialize: grpc.deserialize<users_pb.UsersRequestId>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}
interface IUsersService_IInsert extends grpc.MethodDefinition<users_pb.UsersInsertRequest, users_pb.UsersResponse> {
    path: string; // "/.Users/Insert"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersInsertRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UsersInsertRequest>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}
interface IUsersService_IUpdate extends grpc.MethodDefinition<users_pb.UsersUpdateRequest, users_pb.UsersResponse> {
    path: string; // "/.Users/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersUpdateRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UsersUpdateRequest>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}
interface IUsersService_IRemove extends grpc.MethodDefinition<users_pb.UsersRequestId, users_pb.Empty> {
    path: string; // "/.Users/Remove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersRequestId>;
    requestDeserialize: grpc.deserialize<users_pb.UsersRequestId>;
    responseSerialize: grpc.serialize<users_pb.Empty>;
    responseDeserialize: grpc.deserialize<users_pb.Empty>;
}
interface IUsersService_ILogin extends grpc.MethodDefinition<users_pb.UsersLoginRequest, users_pb.UsersResponse> {
    path: string; // "/.Users/Login"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersLoginRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UsersLoginRequest>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    getAll: grpc.handleUnaryCall<users_pb.Empty, users_pb.UsersResponseList>;
    get: grpc.handleUnaryCall<users_pb.UsersRequestId, users_pb.UsersResponse>;
    insert: grpc.handleUnaryCall<users_pb.UsersInsertRequest, users_pb.UsersResponse>;
    update: grpc.handleUnaryCall<users_pb.UsersUpdateRequest, users_pb.UsersResponse>;
    remove: grpc.handleUnaryCall<users_pb.UsersRequestId, users_pb.Empty>;
    login: grpc.handleUnaryCall<users_pb.UsersLoginRequest, users_pb.UsersResponse>;
}

export interface IUsersClient {
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
    login(request: users_pb.UsersLoginRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    login(request: users_pb.UsersLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    login(request: users_pb.UsersLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
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
    public login(request: users_pb.UsersLoginRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public login(request: users_pb.UsersLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public login(request: users_pb.UsersLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}
