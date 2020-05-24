import {
    CustomersInsertRequest,
    CustomersUpdateRequest,
    CustomersResponse,
    CustomersResponseList,
    Empty
} from '../proto/customers/customers_pb';
import {v4 as uuidv4} from 'uuid';


export default class CustomersRepository {
    public static async findAll(): Promise<CustomersResponseList> {
        const customersResponseList: CustomersResponseList = new CustomersResponseList();

        for (let i: number = 0; i <= 100; i++) {
            const customersResponse = new CustomersResponse();
            customersResponse.setId(uuidv4());
            customersResponse.setName(uuidv4());
            customersResponse.setAge(Math.ceil(Math.random() * 10));
            customersResponse.setAddress(uuidv4());
            customersResponseList.addCustomersresponselist(customersResponse);
        }

        return Promise.resolve(customersResponseList);
    }

    public static async findById(id: string): Promise<CustomersResponse> {
        const customersResponse = new CustomersResponse();
        customersResponse.setId(id);
        customersResponse.setName('Hemicharly Thiago');
        customersResponse.setAge(27);
        customersResponse.setAddress('Rua xxx');

        return Promise.resolve(customersResponse);
    }

    public static async insert(request: CustomersInsertRequest): Promise<CustomersResponse> {
        const customersResponse = new CustomersResponse();
        customersResponse.setId(uuidv4());
        customersResponse.setName(request.getName());
        customersResponse.setAge(request.getAge());
        customersResponse.setAddress(request.getAddress());

        return Promise.resolve(customersResponse);
    }

    public static async update(request: CustomersUpdateRequest): Promise<CustomersResponse> {
        const customersResponse = new CustomersResponse();
        customersResponse.setId(request.getId());
        customersResponse.setName(request.getName());
        customersResponse.setAge(request.getAge());
        customersResponse.setAddress(request.getAddress());

        return Promise.resolve(customersResponse);
    }

    public static async removeById(id: string): Promise<Empty> {
        console.log('Remove customer id: ', id);
        return Promise.resolve(new Empty());
    }
}