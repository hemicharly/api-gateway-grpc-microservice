import {plainToClass} from 'class-transformer';
import {validate, ValidationError} from 'class-validator';
import InvalidParams from '../exceptions/InvalidParams';
import InvalidParamsException from '../exceptions/InvalidParamsException';


export default class ValidateField {

    public static async isInputValid(types: any, data: any): Promise<void> {
        const validationErrors: ValidationError[] = await validate(plainToClass(types, data));

        if (validationErrors !== undefined && validationErrors.length > 0) {
            const invalidParams: InvalidParams[] = validationErrors.map((item: ValidationError) => {
                const errors: InvalidParams = {
                    code: 'invalid-params',
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
