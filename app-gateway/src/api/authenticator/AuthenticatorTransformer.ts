import ClassValidator from '../../utils/ClassValidator';
import AuthenticatorRequest from './input/AuthenticatorRequest';
import UserCreateRequest from './input/UserCreateRequest';


export default class AuthenticatorTransformer {

    public static async inputAuthenticatorRequestToApi(object: any): Promise<AuthenticatorRequest> {
        const authenticatorRequest = await ClassValidator.transformerToModel(AuthenticatorRequest, object);
        await ClassValidator.validateInput(authenticatorRequest);
        return Promise.resolve(authenticatorRequest);
    }

    public static async inputUsersCreateRequestToApi(object: any): Promise<UserCreateRequest> {
        const userCreateRequest = await ClassValidator.transformerToModel(UserCreateRequest, object);

        const validate1 = ClassValidator.validateInput(userCreateRequest);
        const validate2 =  ClassValidator.validateInput(userCreateRequest.roles);

        await Promise.all([validate1, validate2]);

        return Promise.resolve(userCreateRequest);
    }

    public static async fromApi(object: any): Promise<any> {
        return Promise.resolve(object);
    }

}