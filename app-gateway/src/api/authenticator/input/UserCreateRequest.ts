import {IsNotEmpty} from 'class-validator';

export default class UserCreateRequest {

    @IsNotEmpty({message: 'name is required'})
    public name: string;

    @IsNotEmpty({message: 'email is required'})
    public email: string;

    @IsNotEmpty({message: 'password is required'})
    public password: string;
}