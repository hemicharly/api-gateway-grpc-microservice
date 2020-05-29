import LoadClientGRPC from '../../config/grpc/LoadClientGRPC';
import 'dotenv/config';

const customersClient: any = LoadClientGRPC.loadClient({
    serviceName: 'Customers',
    address: process.env.URL_CUSTOMERS || 'grpc-customers:50051',
    fileName: 'customers'
});

export default class CustomersService {
    public static async findAll(): Promise<any> {
        const response = await customersClient.getAll({});

        if (response !== undefined && response.customersResponseList !== undefined) {
            return Promise.resolve(response.customersResponseList);
        }

        return Promise.resolve([]);
    }

    public static async findById(id: string): Promise<any> {
        return customersClient.get({id});
    }

    public static async create(customersRequest: any): Promise<any> {
        return customersClient.insert(customersRequest);
    }

    public static async update(customersRequest: any): Promise<any> {
        return customersClient.update(customersRequest);
    }

    public static async remove(id: string): Promise<any> {
        return customersClient.remove({id});
    }
}