import 'dotenv/config';
import knex from 'knex';
import mockDb from 'mock-knex';
import * as knexFile from '../../../KnexFile';

const dbConnect = knex(knexFile);

if (process.env.NODE_ENV === 'test') {
    mockDb.mock(dbConnect);
}

export default dbConnect;
