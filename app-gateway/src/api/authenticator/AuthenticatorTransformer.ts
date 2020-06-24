import ValidateField from '../../utils/ValidateField';
import AuthenticatorRequest from './input/AuthenticatorRequest';
import UserCreateRequest from './input/UserCreateRequest';


export default class AuthenticatorTransformer {

    public static async inputAuthenticatorToApi(inputData: any): Promise<AuthenticatorRequest> {
        await ValidateField.validateInput(AuthenticatorRequest, inputData);
        return Promise.resolve(inputData);
    }

    public static async inputCreateUserToApi(inputData: any): Promise<UserCreateRequest> {
        await ValidateField.validateInput(UserCreateRequest, inputData);
        return Promise.resolve(inputData);
    }

    public static async fromApi(inputData: any): Promise<any> {
        return Promise.resolve(inputData);
    }

}