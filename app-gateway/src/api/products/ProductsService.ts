import 'dotenv/config';
import LoadClientGRPC from '../../config/grpc/LoadClientGRPC';

const productsClient: any = LoadClientGRPC.loadClient({
    serviceName: 'Products',
    address: process.env.URL_PRODUCTS || 'grpc-products:50053',
    fileName: 'products'
});

export default class ProductsService {
    public static async findAll(): Promise<any> {
        const response = await productsClient.getAll({});

        if (response !== undefined && response.productsResponseList !== undefined) {
            return Promise.resolve(response.productsResponseList);
        }

        return Promise.resolve([]);
    }

    public static async findById(id: string): Promise<any> {
        return productsClient.get({id});
    }

    public static async create(productsRequest: any): Promise<any> {
        return productsClient.insert(productsRequest);
    }

    public static async update(productsRequest: any): Promise<any> {
        return productsClient.update(productsRequest);
    }

    public static async remove(id: string): Promise<any> {
        return productsClient.remove({id});
    }
}