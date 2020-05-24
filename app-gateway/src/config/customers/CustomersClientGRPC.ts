import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const configDef = {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
}

const pkgDefCustomers = protoLoader.loadSync(path.resolve(__dirname, 'customers.proto'), configDef);
const Customers = grpc.loadPackageDefinition(pkgDefCustomers).Customers;
const customersClientGRPC = new Customers(
    'grpc-customers:50051',
    grpc.credentials.createInsecure()
);

export default customersClientGRPC;