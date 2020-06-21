import BaseErrorException from './BaseErrorException';
import InvalidParams from './InvalidParams';


export default class InvalidParamsException extends BaseErrorException {
    constructor(status: number, invalidParams: InvalidParams[]) {
        super(status, undefined, invalidParams);
    }
}
