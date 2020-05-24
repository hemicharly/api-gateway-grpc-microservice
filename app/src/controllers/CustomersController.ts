import * as grpc from 'grpc';

import {CustomersService, ICustomersServer} from '../proto/customers/customers_grpc_pb';
import {
    CustomersInsertRequest,
    CustomersUpdateRequest,
    CustomersRequestId,
    CustomersResponse,
    CustomersResponseList,
    Empty
} from '../proto/customers/customers_pb';
import CustomersRepository from '../repositories/CustomersRepository';


class CustomersServer implements ICustomersServer {

    getAll = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<CustomersResponseList>): Promise<void> => {
        try {
            const response: CustomersResponseList = await CustomersRepository.findAll();
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    get = async (call: grpc.ServerUnaryCall<CustomersRequestId>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response: CustomersResponse = await CustomersRepository.findById(call.request.getId());
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    insert = async (call: grpc.ServerUnaryCall<CustomersInsertRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response = await CustomersRepository.insert(call.request);
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    update = async (call: grpc.ServerUnaryCall<CustomersUpdateRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response = await CustomersRepository.update(call.request);
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    remove = async (call: grpc.ServerUnaryCall<CustomersRequestId>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
        try {
            const response = await CustomersRepository.removeById(call.request.getId());
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };
}

export default {
    service: CustomersService,
    server: new CustomersServer()
};
