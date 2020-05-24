import * as grpc from 'grpc';

import {CustomerServiceService, ICustomerServiceServer} from '../proto/customers/customers_grpc_pb';
import {
    CustomersRequest,
    CustomersRequestId,
    CustomersResponse,
    CustomersResponseList,
    Empty
} from '../proto/customers/customers_pb';
import CustomersServices from '../services/customersServices';


class CustomersHandler implements ICustomerServiceServer {
    /**
     * Customers list
     * @param call
     * @param callback
     */
    getAll = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<CustomersResponseList>): Promise<void> => {
        try {
            const response: CustomersResponseList = await CustomersServices.findAll();
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
            const response: CustomersResponse = await CustomersServices.findById(call.request.getId());
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
    insert = async (call: grpc.ServerUnaryCall<CustomersRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response = await CustomersServices.insert(call.request);
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
    update = async (call: grpc.ServerUnaryCall<CustomersRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        try {
            const response = await CustomersServices.update(call.request);
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
            const response = await CustomersServices.removeById(call.request.getId());
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };
}

export default {
    service: CustomerServiceService,
    handler: new CustomersHandler(),
};
