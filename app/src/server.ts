import 'dotenv/config';
import * as grpc from 'grpc';
import {protoIndex} from './proto';
import CustomersController from './controllers/CustomersController';

protoIndex();

const port: string | number = process.env.PORT || 50051;

type StartServerType = () => void;

export const startServer: StartServerType = (): void => {
    const server: grpc.Server = new grpc.Server();

    /*TODO: Register controllers*/
    server.addService(CustomersController.service, CustomersController.server);

    server.bindAsync(
        `0.0.0.0:${port}`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(`Error start application: ${err}`);
            }
            console.warn(`Application gRPC listening on ${port}`);
        },
    );

    server.start();
};

startServer();
