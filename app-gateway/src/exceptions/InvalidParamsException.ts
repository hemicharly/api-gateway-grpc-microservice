import BaseErrorException from './BaseErrorException';
import InvalidParams from './InvalidParams';


export default class InvalidParamsException extends BaseErrorException {
    constructor(invalidParams: InvalidParams[]) {
        super(400);
        this.invalidParams = invalidParams.map(item => {
            return {
                code: item.code.toUpperCase(),
                message: item.message
            }
        });
    }

    public invalidParams: InvalidParams[];
}
