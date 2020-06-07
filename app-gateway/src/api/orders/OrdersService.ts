import 'dotenv/config';
import LoadClientGRPC from '../../config/grpc/LoadClientGRPC';

const ordersClient: any = LoadClientGRPC.loadClient({
    serviceName: 'Orders',
    address: process.env.URL_ORDERS || 'grpc-orders:50054',
    fileName: 'orders'
});

export default class OrdersService {
    public static async findAll(): Promise<any> {
        const response = await ordersClient.getAll({});

        if (response !== undefined && response.ordersResponseList !== undefined) {
            return Promise.resolve(response.ordersResponseList);
        }

        return Promise.resolve([]);
    }

    public static async create(ordersRequest: any): Promise<any> {
        return ordersClient.insert(ordersRequest);
    }

}