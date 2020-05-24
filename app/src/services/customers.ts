import * as grpc from 'grpc';

import {CustomerServiceService, ICustomerServiceServer} from "../proto/customers/customers_grpc_pb";
import {
    CustomersRequest,
    CustomersRequestId,
    CustomersResponse,
    CustomersResponseList,
    Empty
} from "../proto/customers/customers_pb";


class CustomersHandler implements ICustomerServiceServer {
    /**
     * Customers list
     * @param call
     * @param callback
     */
    getAll = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<CustomersResponseList>): Promise<void> => {
        const customersResponse = new CustomersResponse();
        customersResponse.setId('123456');
        customersResponse.setName('Hemicharly Thiago');
        customersResponse.setAge(27);
        customersResponse.setAddress('Rua xxx');

        const customersResponseList: CustomersResponseList = new CustomersResponseList();
        customersResponseList.setCustomersresponselistList([customersResponse]);

        callback(null, customersResponseList);
    };

    /**
     * Customers by id
     * @param call
     * @param callback
     */
    get = async (call: grpc.ServerUnaryCall<CustomersRequestId>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        const customersResponse = new CustomersResponse();
        customersResponse.setId(call.request.getId());
        customersResponse.setName('Hemicharly Thiago');
        customersResponse.setAge(27);
        customersResponse.setAddress('Rua xxx');

        callback(null, customersResponse);
    };

    /**
     * Customers insert
     * @param call
     * @param callback
     */
    insert = async (call: grpc.ServerUnaryCall<CustomersRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        const customersResponse = new CustomersResponse();
        customersResponse.setId('123');
        customersResponse.setName(call.request.getName());
        customersResponse.setAge(call.request.getAge());
        customersResponse.setAddress(call.request.getAddress());

        callback(null, customersResponse);
    };

    /**
     * Customers update
     * @param call
     * @param callback
     */
    update = async (call: grpc.ServerUnaryCall<CustomersRequest>, callback: grpc.sendUnaryData<CustomersResponse>): Promise<void> => {
        const customersResponse = new CustomersResponse();
        customersResponse.setId('123');
        customersResponse.setName(call.request.getName());
        customersResponse.setAge(call.request.getAge());
        customersResponse.setAddress(call.request.getAddress());

        callback(null, customersResponse);
    };

    /**
     * Customers by remove
     * @param call
     * @param callback
     */
    remove = async (call: grpc.ServerUnaryCall<CustomersRequestId>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
        callback(null, new Empty());
    };
}

export default {
    service: CustomerServiceService,
    handler: new CustomersHandler(),
};
