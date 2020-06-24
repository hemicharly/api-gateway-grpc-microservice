import {validate, ValidationError} from 'class-validator';
import InvalidParams from '../exceptions/InvalidParams';
import InvalidParamsException from '../exceptions/InvalidParamsException';
import {ClassType} from "class-transformer/ClassTransformer";
import {plainToClass} from "class-transformer";


export default class ValidateField {

    public static async toModel<T>(object: ClassType<T>, inputData: any): Promise<T> {
        return plainToClass(object, inputData, { excludeExtraneousValues: true });
    }

    public static async validateInput<T extends Object>(inputData: T): Promise<void> {
        const validationErrors: ValidationError[] = await validate(inputData);

        if (validationErrors && validationErrors.length > 0) {
            const invalidParams: InvalidParams[] = validationErrors.map((item: ValidationError) => {
                return  {
                    code: 'FIELD_REQUIRED',
                    message: Object.values(item.constraints).toString()
                };
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
