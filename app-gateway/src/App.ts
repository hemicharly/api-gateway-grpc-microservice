import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import express, {NextFunction, Request, Response} from 'express';
import helmet from 'helmet';
import IndexRouter from './api/IndexRouter';
import RouteNotFoundException from './exceptions/RouteNotFoundException';
import errorMiddleware from './middleware/ErrorMiddleware';


class App {

    public constructor() {
        this.app = express();
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
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            next(new RouteNotFoundException());
        });
    }

}

export default new App().app;