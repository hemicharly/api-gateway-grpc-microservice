import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import IndexRouter from './api/IndexRouter';
import errorMiddleware from './middleware/ErrorMiddleware';


export default class App {

    public constructor(port: number) {
        this.app = express();
        this.app.set('port', port)
        this.applyMiddleware();
        this.router();
        this.app.use(errorMiddleware);
    }

    public app: express.Application;

    private applyMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(compression());
    }

    private router(): void {
        this.app.use('/', IndexRouter);
    }

}
