import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';
import {validate, ValidationError} from 'class-validator';
import InvalidParams from '../exceptions/InvalidParams';
import InvalidParamsException from '../exceptions/InvalidParamsException';


export default class ClassValidator {

    public static async transformerToModel<T extends Object>(classType: ClassType<T>, object: Object): Promise<T> {
        return plainToClass(classType, object, { excludeExtraneousValues: true });
    }

    public static async validateInput<T extends Object>(object: T): Promise<void> {
        const validationErrors: ValidationError[] = await validate(object);

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
}
