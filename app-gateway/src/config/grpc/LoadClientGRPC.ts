import * as protoLoader from '@grpc/proto-loader';
import * as grpc from 'grpc';
import path from 'path';
import {promisify} from 'util';
import {ILoadClientGRPC} from './ILoadClientGRPC';


export default class LoadClientGRPC {
    protected static PROTO_CONFIG: any = {
        keepCase: false,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }

    public static loadClient({serviceName, fileName, address, credentials = grpc.credentials.createInsecure()}: ILoadClientGRPC): any {
        const protoDef: any = protoLoader.loadSync(path.resolve(__dirname, 'proto', `${fileName}.proto`), this.PROTO_CONFIG);

        const protoLoad: any = grpc.loadPackageDefinition(protoDef);

        const clientGRPC: any = new protoLoad[serviceName](address, credentials);

        const clientProto: any = Object.entries(clientGRPC.__proto__);
        clientProto.map(([prop, value]) => {
            if (value !== undefined && value.originalName !== undefined) {
                clientGRPC[prop] = promisify(value);
            }
        });

        return clientGRPC;
    }
}