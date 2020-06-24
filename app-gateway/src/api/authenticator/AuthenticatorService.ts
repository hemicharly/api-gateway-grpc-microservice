import {v4 as uuidv4} from 'uuid';
import AuthenticatorRepository from './AuthenticatorRepository';
import UserCreateRequest from './input/UserCreateRequest';
import Users from './model/Users';


class AuthenticatorService {

    public async findAll(): Promise<any[]> {
        return AuthenticatorRepository.findAll();
    }

    public async create(userCreateRequest: UserCreateRequest): Promise<void> {
        console.log(userCreateRequest)
        const users: Users = {
            id: uuidv4(),
            name: userCreateRequest.name,
            email: userCreateRequest.email,
            password: userCreateRequest.password,
            role: 'admin'
        };
        await AuthenticatorRepository.insert(users);
    }
}

export default new AuthenticatorService();