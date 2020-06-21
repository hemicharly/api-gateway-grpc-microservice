import knex from 'knex';
import {configDatabase} from './KnexFile';

export default knex(configDatabase);
