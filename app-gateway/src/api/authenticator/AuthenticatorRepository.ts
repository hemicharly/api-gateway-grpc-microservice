import DbConnect from '../../config/database/DbConnect';
import SQLErrorException from '../../exceptions/SQLErrorException';
import RepositoryDatabase from '../../repository/RepositoryDatabase';
import Users from './model/Users';


class AuthenticatorRepository implements RepositoryDatabase<Users> {

    public async insert(data: Users): Promise<void> {
        try {
            await DbConnect<Users>('users').insert(data);
        } catch (e) {
            throw new SQLErrorException(e);
        }
    }

    public async findAll(): Promise<any[]> {
        try {
            const result = await DbConnect.raw(`select * from users`);
            if (result === undefined) {
                throw new Error('Error query find users');
            }
            return Promise.resolve(result[0]);
        } catch (e) {
            throw new SQLErrorException(e);
        }
    }

    public async findOne(data: any): Promise<any> {
        return;
    }

    public async delete(data: Users): Promise<void> {
        return;
    }

    public async update(data: Users): Promise<void> {
        return;
    }

}

export default new AuthenticatorRepository();
