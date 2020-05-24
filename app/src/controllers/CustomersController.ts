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
    /**
     * Customers list
     * @param call
     * @param callback
     */
    getAll = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<CustomersResponseList>): Promise<void> => {
        try {
            const response: CustomersResponseList = await CustomersRepository.findAll();
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    /**
     * Customers by id
     * @param call
     * @param callback
     */
    get = async (call: grpc.ServerUnaryCall<CustomersRequestId>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response: CustomersResponse = await CustomersRepository.findById(call.request.getId());
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    /**
     * Customers insert
     * @param call
     * @param callback
     */
    insert = async (call: grpc.ServerUnaryCall<CustomersInsertRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response = await CustomersRepository.insert(call.request);
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    /**
     * Customers update
     * @param call
     * @param callback
     */
    update = async (call: grpc.ServerUnaryCall<CustomersUpdateRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response = await CustomersRepository.update(call.request);
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    /**
     * Customers by remove
     * @param call
     * @param callback
     */
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
