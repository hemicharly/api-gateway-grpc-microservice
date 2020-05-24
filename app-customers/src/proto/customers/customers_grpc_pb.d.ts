// package: 
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as customers_pb from "./customers_pb";

interface ICustomersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: ICustomersService_IGetAll;
    get: ICustomersService_IGet;
    insert: ICustomersService_IInsert;
    update: ICustomersService_IUpdate;
    remove: ICustomersService_IRemove;
}

interface ICustomersService_IGetAll extends grpc.MethodDefinition<customers_pb.Empty, customers_pb.CustomersResponseList> {
    path: string; // "/.Customers/GetAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.Empty>;
    requestDeserialize: grpc.deserialize<customers_pb.Empty>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponseList>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponseList>;
}
interface ICustomersService_IGet extends grpc.MethodDefinition<customers_pb.CustomersRequestId, customers_pb.CustomersResponse> {
    path: string; // "/.Customers/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersRequestId>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersRequestId>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponse>;
}
interface ICustomersService_IInsert extends grpc.MethodDefinition<customers_pb.CustomersInsertRequest, customers_pb.CustomersResponse> {
    path: string; // "/.Customers/Insert"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersInsertRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersInsertRequest>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponse>;
}
interface ICustomersService_IUpdate extends grpc.MethodDefinition<customers_pb.CustomersUpdateRequest, customers_pb.CustomersResponse> {
    path: string; // "/.Customers/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersUpdateRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersUpdateRequest>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponse>;
}
interface ICustomersService_IRemove extends grpc.MethodDefinition<customers_pb.CustomersRequestId, customers_pb.Empty> {
    path: string; // "/.Customers/Remove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersRequestId>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersRequestId>;
    responseSerialize: grpc.serialize<customers_pb.Empty>;
    responseDeserialize: grpc.deserialize<customers_pb.Empty>;
}

export const CustomersService: ICustomersService;

export interface ICustomersServer {
    getAll: grpc.handleUnaryCall<customers_pb.Empty, customers_pb.CustomersResponseList>;
    get: grpc.handleUnaryCall<customers_pb.CustomersRequestId, customers_pb.CustomersResponse>;
    insert: grpc.handleUnaryCall<customers_pb.CustomersInsertRequest, customers_pb.CustomersResponse>;
    update: grpc.handleUnaryCall<customers_pb.CustomersUpdateRequest, customers_pb.CustomersResponse>;
    remove: grpc.handleUnaryCall<customers_pb.CustomersRequestId, customers_pb.Empty>;
}

export interface ICustomersClient {
    getAll(request: customers_pb.Empty, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    getAll(request: customers_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    getAll(request: customers_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    get(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    insert(request: customers_pb.CustomersInsertRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    insert(request: customers_pb.CustomersInsertRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    insert(request: customers_pb.CustomersInsertRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    update(request: customers_pb.CustomersUpdateRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    update(request: customers_pb.CustomersUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    update(request: customers_pb.CustomersUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    remove(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class CustomersClient extends grpc.Client implements ICustomersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: customers_pb.Empty, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    public getAll(request: customers_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    public getAll(request: customers_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    public get(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: customers_pb.CustomersInsertRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: customers_pb.CustomersInsertRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: customers_pb.CustomersInsertRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public update(request: customers_pb.CustomersUpdateRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public update(request: customers_pb.CustomersUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public update(request: customers_pb.CustomersUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public remove(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
}
