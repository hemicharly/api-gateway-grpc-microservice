import ErrorException from './BaseErrorException';

export default class AccessDeniedException extends ErrorException {
    constructor() {
        super(401, 'Access Denied');
    }
}
