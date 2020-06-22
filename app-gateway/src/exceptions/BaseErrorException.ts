import InvalidParams from './InvalidParams';


abstract class BaseErrorException {
    protected constructor(statusCode: number, message?: string, invalidParams?: InvalidParams[], stack?: string) {
        this.statusCode = statusCode;
        this.message = message;
        this.invalidParams = invalidParams;
        this.stack = stack;
    }

    public statusCode: number;
    public message: string;
    public invalidParams?: InvalidParams[];
    public stack?: string;
}

export default BaseErrorException;
