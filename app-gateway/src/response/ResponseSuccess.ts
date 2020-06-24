import ResponseBase from './ResponseBase';

export default class ResponseSuccess extends ResponseBase{
    constructor(object: any) {
        super(200, object);
    }
}
