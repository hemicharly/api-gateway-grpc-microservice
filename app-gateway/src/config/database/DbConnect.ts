import 'dotenv/config';
import knex from 'knex';
import mockDb from 'mock-knex';
import {configDatabase} from './KnexFile';

const dbConnect = knex(configDatabase);

if (process.env.NODE_ENV === 'test') {
    mockDb.mock(dbConnect);
}

export default dbConnect;
