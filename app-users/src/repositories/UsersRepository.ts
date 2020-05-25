import {
    UsersInsertRequest,
    UsersUpdateRequest,
    UsersResponse,
    UsersResponseList,
    Empty,
    UsersLoginRequest,
} from '../proto/users/users_pb';
import {v4 as uuidv4} from 'uuid';


export default class UsersRepository {
    public static async findAll(): Promise<UsersResponseList> {
        const usersResponseList: UsersResponseList = new UsersResponseList();

        for (let i: number = 0; i <= 100; i++) {
            const usersResponse = new UsersResponse();
            usersResponse.setId(uuidv4());
            usersResponse.setUsername(uuidv4());
            usersResponse.setEmail(uuidv4());
            usersResponseList.addUsersresponselist(usersResponse);
        }

        return Promise.resolve(usersResponseList);
    }

    public static async findById(id: string): Promise<UsersResponse> {

        const usersResponse = new UsersResponse();
        usersResponse.setId(id);
        usersResponse.setUsername('teste');
        usersResponse.setEmail('teste@gmail.com');

        return Promise.resolve(usersResponse);
    }

    public static async insert(request: UsersInsertRequest): Promise<UsersResponse> {
        const usersResponse = new UsersResponse();
        usersResponse.setId(uuidv4());
        usersResponse.setUsername(request.getUsername());
        usersResponse.setEmail(request.getEmail());

        return Promise.resolve(usersResponse);
    }

    public static async update(request: UsersUpdateRequest): Promise<UsersResponse> {
        const usersResponse = new UsersResponse();
        usersResponse.setId(request.getId());
        usersResponse.setUsername(request.getUsername());
        usersResponse.setEmail(request.getEmail());

        return Promise.resolve(usersResponse);
    }

    public static async removeById(id: string): Promise<Empty> {
        console.log('Remove user id: ', id);
        return Promise.resolve(new Empty());
    }

    public static async login(request: UsersLoginRequest): Promise<UsersResponse> {
        const usersLoginResponse = new UsersResponse()
        usersLoginResponse.setId(uuidv4());
        usersLoginResponse.setUsername(request.getUsername());
        usersLoginResponse.setEmail(uuidv4());

        return Promise.resolve(usersLoginResponse);
    }
}