import 'dotenv/config';
import * as http from 'http';
import app from './App';


class ConnectServer {
    protected port: number;

    constructor() {
        this.port = this.normalizePort(Number(process.env.PORT) || 3005);
        this.validateEnvironment();
    }

    public startServer(): void {
        const server: http.Server = http.createServer(app);
        server.listen(this.port);
        server.on('error', this.onError);
        server.on('listening', () => console.warn('Gateway gRPC server started'));
    }

    private normalizePort(value: number): number {
        if (isNaN(value)) return value;
        if (value >= 0) return value;
        throw new Error('PORT is undefined');
    }

    private validateEnvironment(): void {
        if (!process.env.NODE_ENV) {
            console.error('NODE_ENV is undefined.');
            process.exit(1);
        }

        if (process.env.NODE_ENV !== 'production') {
            this.processError();
        }

        if (process.env.NODE_ENV === 'production' && typeof process.env.pm_id === 'undefined') {
            throw new Error('The application must be run through PM2 at the production stage');
        }
    }

    private processError(): void {
        process.on('uncaughtException', error => {
            console.error(error);
            process.exit(1);
        });
        process.on('unhandledRejection', error => {
            console.error(error);
            process.exit(1);
        });
    }

    private onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        const bind = typeof this.port === 'string' ? 'Pipe ' + this.port : 'Port ' + this.port;
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                break;
            default:
                throw error;
        }
        process.exit(1);
    }
}

export default new ConnectServer();