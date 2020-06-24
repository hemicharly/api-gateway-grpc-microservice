import ValidateField from '../../utils/ValidateField';
import AuthenticatorRequest from './input/AuthenticatorRequest';
import UserCreateRequest from "./input/UserCreateRequest";


export default class AuthenticatorTransformer {

    public static async inputAuthenticatorRequestToApi(inputData: any): Promise<AuthenticatorRequest> {
        const inputToModel = await ValidateField.toModel(AuthenticatorRequest, inputData);
        await ValidateField.validateInput(inputToModel);

        return Promise.resolve(inputToModel);
    }

    public static async inputUsersCreateRequestToApi(inputData: any): Promise<UserCreateRequest> {
        const inputToModel = await ValidateField.toModel(UserCreateRequest, inputData);
        await ValidateField.validateInput(inputToModel);

        return Promise.resolve(inputToModel);
    }

    public static async fromApi(inputData: any): Promise<any> {
        return Promise.resolve(inputData);
    }

}