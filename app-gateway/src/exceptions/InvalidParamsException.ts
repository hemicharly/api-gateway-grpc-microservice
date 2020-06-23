import BaseErrorException from './BaseErrorException';
import InvalidParams from './InvalidParams';


export default class InvalidParamsException extends BaseErrorException {
    constructor(invalidParams: InvalidParams[]) {
        super(400);
        this.invalidParams = invalidParams;
    }

    public invalidParams: InvalidParams[]
}
