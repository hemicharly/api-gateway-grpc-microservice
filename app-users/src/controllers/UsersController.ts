import * as grpc from 'grpc';

import {UsersService, IUsersServer} from '../proto/users/users_grpc_pb';
import {
    UsersInsertRequest,
    UsersUpdateRequest,
    UsersRequestId,
    UsersResponse,
    UsersResponseList,
    Empty,
    UsersLoginRequest
} from '../proto/users/users_pb';
import UsersRepository from '../repositories/UsersRepository';


class UsersServer implements IUsersServer {

    getAll = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<UsersResponseList>): Promise<void> => {
        try {
            const response: UsersResponseList = await UsersRepository.findAll();
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    get = async (call: grpc.ServerUnaryCall<UsersRequestId>, callback: grpc.sendUnaryData<UsersResponse>): Promise<void> => {
        try {
            const response: UsersResponse = await UsersRepository.findById(call.request.getId());
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    insert = async (call: grpc.ServerUnaryCall<UsersInsertRequest>, callback: grpc.sendUnaryData<UsersResponse>): Promise<void> => {
        try {
            const response: UsersResponse = await UsersRepository.insert(call.request);
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    update = async (call: grpc.ServerUnaryCall<UsersUpdateRequest>, callback: grpc.sendUnaryData<UsersResponse>): Promise<void> => {
        try {
            const response: UsersResponse = await UsersRepository.update(call.request);
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    remove = async (call: grpc.ServerUnaryCall<UsersRequestId>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
        try {
            const response: Empty = await UsersRepository.removeById(call.request.getId());
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };

    login = async (call: grpc.ServerUnaryCall<UsersLoginRequest>, callback: grpc.sendUnaryData<UsersResponse>): Promise<void> => {
        try {
            const response: UsersResponse = await UsersRepository.login(call.request);
            callback(null, response);
        } catch (e) {
            callback(e, null);
        }
    };
}


export default {
    service: UsersService,
    server: new UsersServer()
};
