import ResponseBase from './ResponseBase';

export default class ResponseCreated extends ResponseBase{
    constructor(message: string, object?: any) {
        super(201, object);
        this.message = message;
    }

    public message?: string;
}
