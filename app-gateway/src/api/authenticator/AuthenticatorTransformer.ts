import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';
import ValidateField from '../../utils/ValidateField';


export default class AuthenticatorTransformer {

    public static async toApi<T>(object: ClassType<T>, inputData: any): Promise<T> {
        const inputToApi: T = plainToClass(object, inputData, { excludeExtraneousValues: true });
        await ValidateField.validateInput(inputToApi);
        return Promise.resolve(inputToApi);
    }

    public static async fromApi(inputData: any): Promise<any> {
        return Promise.resolve(inputData);
    }

}