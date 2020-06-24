import { Expose} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';

export default class AuthenticatorRequest {
    @IsNotEmpty({message: 'username is required'})
    @Expose()
    public username: string;

    @IsNotEmpty({message: 'password is required'})
    @Expose()
    public password: string;
}