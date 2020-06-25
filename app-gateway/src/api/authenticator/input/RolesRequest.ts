import {Expose} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';

export default class RolesRequest {
    @IsNotEmpty()
    @Expose()
    public owner: boolean;

    @IsNotEmpty()
    @Expose()
    public admin: boolean;

    @IsNotEmpty()
    @Expose()
    public editor: boolean;
}