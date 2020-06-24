import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';
import ValidateField from '../../utils/ValidateField';
import AuthenticatorRequest from "./input/AuthenticatorRequest";


export default class AuthenticatorTransformer {

    public static async toApi(inputData: any): Promise<AuthenticatorRequest> {
        const inputToApi = await ValidateField.toModel(AuthenticatorRequest, inputData);
        await ValidateField.validateInput(inputToApi);
        return Promise.resolve(inputToApi);
    }

    public static async fromApi(inputData: any): Promise<any> {
        return Promise.resolve(inputData);
    }

}