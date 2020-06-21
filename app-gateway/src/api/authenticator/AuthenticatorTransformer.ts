import ValidateField from '../../utils/ValidateField';
import AuthenticatorRequest from './input/AuthenticatorRequest';

export default class AuthenticatorTransformer {

    public static async toApi(inputData: any): Promise<AuthenticatorRequest>{
        await ValidateField.isInputValid(AuthenticatorRequest, inputData);
        return Promise.resolve(inputData);
    }

    public static async fromApi(inputData: any): Promise<any>{
        return Promise.resolve(inputData);
    }

}