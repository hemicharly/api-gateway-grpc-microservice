import InvalidParams from './InvalidParams';

export default class BaseErrorException {
    constructor(status: number, message?: string, invalidParams?: InvalidParams[]) {
        this.status = status;
        this.message = message;
        this.invalidParams = invalidParams;
    }

    public status: number;
    public message?: string;
    public invalidParams?: InvalidParams[];
}
