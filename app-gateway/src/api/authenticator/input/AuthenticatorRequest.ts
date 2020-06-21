import {IsNotEmpty} from 'class-validator';

export default class AuthenticatorRequest {

    @IsNotEmpty({message: 'username is required'})
    public username: string;

    @IsNotEmpty({message: 'password is required'})
    public password: string;
}