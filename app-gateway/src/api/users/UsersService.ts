import LoadClientGRPC from '../../config/grpc/LoadClientGRPC';
import 'dotenv/config';

const usersClient: any = LoadClientGRPC.loadClient({
    serviceName: 'Users',
    address: process.env.URL_USERS || 'grpc-users:50052',
    fileName: 'users'
});

export default class UsersService {
    public static async findAll(): Promise<any> {
        const response = await usersClient.getAll({});

        if (response !== undefined && response.usersResponseList !== undefined) {
            return Promise.resolve(response.usersResponseList);
        }

        return Promise.resolve([]);
    }

    public static async findById(id: string): Promise<any> {
        return usersClient.get({id});
    }

    public static async create(usersRequest: any): Promise<any> {
        return usersClient.insert(usersRequest);
    }

    public static async update(usersRequest: any): Promise<any> {
        return usersClient.update(usersRequest);
    }

    public static async remove(id: string): Promise<any> {
        return usersClient.remove({id});
    }

    public static async login(usersRequest: any): Promise<any> {
        return usersClient.login(usersRequest);
    }
}