import {ChannelCredentials} from 'grpc';


export interface ILoadClientGRPC {
    serviceName: string;
    fileName: string;
    address: string;
    credentials?: ChannelCredentials;
}