// package: 
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as customers_pb from "./customers_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: ICustomerServiceService_IGetAll;
    get: ICustomerServiceService_IGet;
    insert: ICustomerServiceService_IInsert;
    update: ICustomerServiceService_IUpdate;
    remove: ICustomerServiceService_IRemove;
}

interface ICustomerServiceService_IGetAll extends grpc.MethodDefinition<customers_pb.Empty, customers_pb.CustomersResponseList> {
    path: string; // "/.CustomerService/GetAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.Empty>;
    requestDeserialize: grpc.deserialize<customers_pb.Empty>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponseList>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponseList>;
}
interface ICustomerServiceService_IGet extends grpc.MethodDefinition<customers_pb.CustomersRequestId, customers_pb.CustomersResponse> {
    path: string; // "/.CustomerService/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersRequestId>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersRequestId>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponse>;
}
interface ICustomerServiceService_IInsert extends grpc.MethodDefinition<customers_pb.CustomersRequest, customers_pb.CustomersResponse> {
    path: string; // "/.CustomerService/Insert"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersRequest>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponse>;
}
interface ICustomerServiceService_IUpdate extends grpc.MethodDefinition<customers_pb.CustomersRequest, customers_pb.CustomersResponse> {
    path: string; // "/.CustomerService/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersRequest>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersRequest>;
    responseSerialize: grpc.serialize<customers_pb.CustomersResponse>;
    responseDeserialize: grpc.deserialize<customers_pb.CustomersResponse>;
}
interface ICustomerServiceService_IRemove extends grpc.MethodDefinition<customers_pb.CustomersRequestId, customers_pb.Empty> {
    path: string; // "/.CustomerService/Remove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<customers_pb.CustomersRequestId>;
    requestDeserialize: grpc.deserialize<customers_pb.CustomersRequestId>;
    responseSerialize: grpc.serialize<customers_pb.Empty>;
    responseDeserialize: grpc.deserialize<customers_pb.Empty>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer {
    getAll: grpc.handleUnaryCall<customers_pb.Empty, customers_pb.CustomersResponseList>;
    get: grpc.handleUnaryCall<customers_pb.CustomersRequestId, customers_pb.CustomersResponse>;
    insert: grpc.handleUnaryCall<customers_pb.CustomersRequest, customers_pb.CustomersResponse>;
    update: grpc.handleUnaryCall<customers_pb.CustomersRequest, customers_pb.CustomersResponse>;
    remove: grpc.handleUnaryCall<customers_pb.CustomersRequestId, customers_pb.Empty>;
}

export interface ICustomerServiceClient {
    getAll(request: customers_pb.Empty, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    getAll(request: customers_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    getAll(request: customers_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    get(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    insert(request: customers_pb.CustomersRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    insert(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    insert(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    update(request: customers_pb.CustomersRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    update(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    update(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    remove(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: customers_pb.Empty, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    public getAll(request: customers_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    public getAll(request: customers_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponseList) => void): grpc.ClientUnaryCall;
    public get(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public get(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: customers_pb.CustomersRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public insert(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public update(request: customers_pb.CustomersRequest, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public update(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public update(request: customers_pb.CustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.CustomersResponse) => void): grpc.ClientUnaryCall;
    public remove(request: customers_pb.CustomersRequestId, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: customers_pb.CustomersRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customers_pb.Empty) => void): grpc.ClientUnaryCall;
}
