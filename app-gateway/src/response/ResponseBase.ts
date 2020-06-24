abstract class ResponseBase {
    protected constructor(statusCode: number, object: any) {
        this.statusCode = statusCode;
        this.object = object;
    }

    public statusCode: number;
    public object: any;
}

export default ResponseBase;
