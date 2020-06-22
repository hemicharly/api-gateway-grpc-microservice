import BaseErrorException from './BaseErrorException';


export default class ServerInternalErrorException extends BaseErrorException {
    constructor(stack?: string) {
        super(500, 'Server Internal Error', undefined, stack);
    }
}
