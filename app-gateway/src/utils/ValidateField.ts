import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';
import {validate, ValidationError} from 'class-validator';
import InvalidParams from '../exceptions/InvalidParams';
import InvalidParamsException from '../exceptions/InvalidParamsException';


export default class ValidateField {

    public static async validateInput<T, V>(object: ClassType<T>, inputData: V): Promise<void> {
        const validationErrors: ValidationError[] = await validate(plainToClass(object, inputData));

        if (validationErrors !== undefined && validationErrors.length > 0) {
            const invalidParams: InvalidParams[] = validationErrors.map((item: ValidationError) => {
                const errors: InvalidParams = {
                    code: 'FIELD_REQUIRED',
                    message: Object.values(item.constraints).toString()
                };
                return errors;
            })
            throw new InvalidParamsException(invalidParams);
        }
    }

    public static async removeSpecialCharacter(value: string): Promise<string> {
        return Promise.resolve(value.replace(/[.,\/@#!$%\^&\*;:{}=\-_`~()]/g, ''));
    }

    public static async extractFirstName(str: string, lengthString: number): Promise<string> {
        return str.trim().split(' ').slice(0, 1).join(' ').substring(0, lengthString);
    }

    public static async extractLastName(str: string, lengthString: number): Promise<string> {
        return str.trim().split(' ').slice(-1).join(' ').substring(0, lengthString);
    }
}
