import BaseErrorException from './BaseErrorException';

export default class AccessDeniedException extends BaseErrorException {
    constructor() {
        super(401, 'Access Denied');
    }
}
