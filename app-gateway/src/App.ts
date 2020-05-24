import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import IndexRouter from './api/IndexRouter';

class App {

    public constructor() {
        dotenv.config();
        this.app = express();
        this.applyMiddleware();
        this.router();
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

export default App;
