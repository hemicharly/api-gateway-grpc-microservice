import 'dotenv/config';
import {Config as Knex} from 'knex';
import {join} from 'path';

const parentKnex = join(__dirname, 'knex');

if (!process.env.NODE_ENV) {
    console.error('NODE_ENV is undefined');

    process.exit(1);
}

if (!process.env.DB_DATABASE) {
    console.error('DB_DATABASE is undefined');
    process.exit(1);
}

if (!process.env.DB_USER_NAME) {
    console.error('DB_USER_NAME is undefined');
    process.exit(1);
}

if (!process.env.DB_PASSWORD) {
    console.error('DB_PASSWORD is undefined');
    process.exit(1);
}

if (!process.env.DB_HOST) {
    console.error('DB_HOST is undefined');
    process.exit(1);
}

const configDatabase: Knex = {
    client: 'mysql',
    connection: {
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER_NAME
    },
    pool: {
        min: 2,
        max: 15,
        idleTimeoutMillis: 100000
    },
    migrations: {
        directory: `${parentKnex}/migrations`
    },
    seeds: {
        directory: `${parentKnex}/seeds`
    }
}

export = configDatabase;