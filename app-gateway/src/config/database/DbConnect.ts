import knex from 'knex';
import mockKnex from 'mock-knex';
import {configDatabase} from './KnexFile';

const DbConnect = knex(configDatabase);

if (process.env.NODE_ENV === 'test') {
    console.warn('Test with mock knex enable');
    mockKnex.mock(DbConnect);
}

export default DbConnect;
