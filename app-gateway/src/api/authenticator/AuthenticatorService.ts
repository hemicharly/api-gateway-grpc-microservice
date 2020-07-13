import 'dotenv/config';
import jwt from 'jsonwebtoken';
import {v4 as uuidv4} from 'uuid';
import AccessDeniedException from '../../exceptions/AccessDeniedException';
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

    public async signIn(data: any): Promise<any> {
        try {
            const users = await AuthenticatorRepository.findOne({email: data.email, password: data.password});

            if (users) {
                return {
                    userId: users.userId,
                    username: users.username,
                    token: await AuthenticatorService.generatorToken(users.userId),
                };
            }
        } catch (e) {
            throw new AccessDeniedException();
        }

        throw new AccessDeniedException();
    }

    public async checkJWT(token: string): Promise<void> {
        if (!token) {
            throw new AccessDeniedException();
        }

        if (token.length <= 0) {
            throw new AccessDeniedException();
        }

        try {
            const payload: any = jwt.verify(token, process.env.JWT_SECRET);
            if (payload) {
                /*TODO: Implementar logica de validação do payload.userId no banco ou cache no redis*/
            }
        } catch (e) {
            throw new AccessDeniedException();
        }


    }

    private static async generatorToken(userId: string): Promise<string> {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: userId
        }, process.env.JWT_SECRET);
    }
}

export default new AuthenticatorService();