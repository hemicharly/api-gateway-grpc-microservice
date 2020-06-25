import {Expose, Type} from 'class-transformer';
import {IsNotEmpty, IsNotEmptyObject} from 'class-validator';
import 'reflect-metadata';
import RolesRequest from './RolesRequest';

export default class UserCreateRequest {

    @IsNotEmpty()
    @Expose()
    public name: string;

    @IsNotEmpty()
    @Expose()
    public email: string;

    @IsNotEmpty()
    @Expose()
    public password: string;

    @IsNotEmptyObject()
    @Type(() => RolesRequest)
    @Expose()
    public roles: RolesRequest;
}

