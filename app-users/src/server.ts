import 'dotenv/config';
import * as grpc from 'grpc';
import {protoIndex} from './proto';
import UsersController from './controllers/UsersController';

protoIndex();

const port: string | number = process.env.PORT || 50052;

type StartServerType = () => void;

export const startServer: StartServerType = (): void => {
    const server: grpc.Server = new grpc.Server();

    /*TODO: Register controllers*/
    server.addService(UsersController.service, UsersController.server);

    server.bindAsync(
        `0.0.0.0:${port}`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(`Error start application: ${err}`);
            }
            console.warn(`Microservice users gRPC listening on ${port}`);
        },
    );

    server.start();
};

startServer();
