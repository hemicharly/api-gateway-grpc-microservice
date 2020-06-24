import {Exclude} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';

export default class AuthenticatorRequest {

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    @IsNotEmpty({message: 'username is required'})
    public username: string;

    @IsNotEmpty({message: 'password is required'})
    public password: string;
}