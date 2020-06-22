import BaseErrorException from './BaseErrorException';


export default class RouteNotFoundException extends BaseErrorException {
    constructor() {
        super(404, 'Route Not Found');
    }
}
