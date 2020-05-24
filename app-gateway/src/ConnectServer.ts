import * as dotenv from 'dotenv';
import * as http from 'http';
import App from './App';


class ConnectServer {

    protected server: http.Server;
    protected port: string | number | boolean;

    constructor() {
        dotenv.config();
        this.port = ConnectServer.normalizePort(Number(process.env.PORT) || 3005);
        this.initialValidation();
    }


    public start(): void {
        this.initServer();
    }


    private static normalizePort(value: number | string): number | string | boolean {
        const _port: number = typeof value === 'string' ? parseInt(value, 10) : value;
        if (isNaN(_port)) return value;
        if (_port >= 0) return _port;
        return false;
    }


    private static onListening(): void {
        console.warn('Gateway gRPC server started');
    }

    private initServer(): void {
        const app = new App().app;
        app.set('port', this.port);
        this.server = http.createServer(app);
        this.server.listen(this.port);
        this.server.on('error', this.onError);
        this.server.on('listening', ConnectServer.onListening);
    }


    private initialValidation(): void {
        if (!process.env.NODE_ENV) {
            console.error('NODE_ENV is undefined.');
            process.exit(1);
        }

        if (!this.port) {
            console.error('PORT is undefined.');
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
