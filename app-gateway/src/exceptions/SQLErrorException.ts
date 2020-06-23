import InvalidParamsException from './InvalidParamsException';
import ServerInternalErrorException from './ServerInternalErrorException';


export default class SQLErrorException extends ServerInternalErrorException {
    constructor(error: any) {
        if (error.code !== undefined && error.code === 'ER_DUP_ENTRY') {
            throw new InvalidParamsException([{code: error.code, message: error.sqlMessage}]);
        }
        super(error.stack);
    }
}
