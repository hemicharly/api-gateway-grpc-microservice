import InvalidParams from './InvalidParams';

export default class BaseErrorException extends Error {
    constructor(status: number, message?: string, invalidParams?: InvalidParams[]) {
        super(message);
        this.status = status;
        this.invalidParams = invalidParams;
    }

    public status: number;
    public invalidParams?: InvalidParams[];
}
