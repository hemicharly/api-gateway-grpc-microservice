import customersClientGRPC from '../../config/customers/CustomersClientGRPC';

export default class CustomersService {
    public static async findAll(): Promise<any> {
        return new Promise((resolve, reject) =>
            customersClientGRPC.getAll(null, (error, data) => {
                if (!error) {
                    resolve(data.customersResponseList);
                }
                reject(error);
            }));
    }

    public static async findById(id: string): Promise<any> {
        return new Promise((resolve, reject) =>
            customersClientGRPC.get({id}, (error, data) => {
                if (!error) {
                    resolve(data);
                }
                reject(error);
            }));
    }

    public static async create(customersRequest: any): Promise<any> {
        return new Promise((resolve, reject) =>
            customersClientGRPC.insert(customersRequest, (error, data) => {
                if (!error) {
                    resolve(data);
                }
                reject(error);
            }));
    }

    public static async update(customersRequest: any): Promise<any> {
        return new Promise((resolve, reject) =>
            customersClientGRPC.update(customersRequest, (error, data) => {
                if (!error) {
                    resolve(data);
                }
                reject(error);
            }));
    }

    public static async remove(id: string): Promise<any> {
        return new Promise((resolve, reject) =>
            customersClientGRPC.remove({id}, (error, data) => {
                if (!error) {
                    if (Object.keys(data).length === 0) {
                        resolve({id, message: 'Removed with success'});
                    }

                    resolve({id, message: 'Failed in remove customer'});
                }
                reject(error);
            }));
    }
}