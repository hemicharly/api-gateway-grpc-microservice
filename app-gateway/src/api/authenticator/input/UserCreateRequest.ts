import {Expose} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';

export default class UserCreateRequest {

    @IsNotEmpty({message: 'name is required'})
    @Expose()
    public name: string;

    @IsNotEmpty({message: 'email is required'})
    @Expose()
    public email: string;

    @IsNotEmpty({message: 'password is required'})
    @Expose()
    public password: string;
}