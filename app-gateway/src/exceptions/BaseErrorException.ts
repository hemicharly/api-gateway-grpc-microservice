abstract class BaseErrorException {
    protected constructor(statusCode: number, message?: string) {
        this.statusCode = statusCode;
        this.message = message;

    }

    public statusCode: number;
    public message: string;
}

export default BaseErrorException;
