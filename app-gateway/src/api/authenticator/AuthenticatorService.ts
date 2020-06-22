import DbConnect from '../../config/database/DbConnect';
import AuthenticatorRequest from './input/AuthenticatorRequest';

export default class AuthenticatorService {
    public static async findAll(): Promise<any> {
        const result = await DbConnect.raw('select current_timestamp() as date_time');
        console.log('result: ', result[0]);
        return Promise.resolve(result[0]);
    }

    public static async token(authenticatorRequest: AuthenticatorRequest): Promise<any> {
        console.log('token: ', authenticatorRequest);
        return {
            access_token: 'gfsdgfdsgfdsgrtfdsgre-fdsggfdsgfdgsd4534gfhgfd',
            expired_in: 123456
        }
    }
}