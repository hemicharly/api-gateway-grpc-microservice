import BaseErrorException from './BaseErrorException';

export default class BadRequestException extends BaseErrorException {
    constructor(message: string) {
        super(400, message);
    }
}
