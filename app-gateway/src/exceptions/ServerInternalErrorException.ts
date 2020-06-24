import BaseErrorException from './BaseErrorException';


export default class ServerInternalErrorException extends BaseErrorException {
    constructor(stack: string) {
        super(500, 'Server Internal Error');
        this.stack = stack ? stack.replace('Error: ' + this.message + '\n', '').replace(/^\s+at /, '') : stack;
    }

    public stack?: string;
}
