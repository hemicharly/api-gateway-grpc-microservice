import * as Knex from 'knex';

const tableName: string = 'users'
export const up = async (knex: Knex): Promise<Knex.SchemaBuilder> => {
    return knex.schema.createTable(tableName, (table: Knex.CreateTableBuilder) => {
        table.uuid('id').primary();
        table.string('name', 48).notNullable();
        table.string('email', 32).unique().notNullable();
        table.string('password', 64).notNullable();
        table.string('role', 16).notNullable();
    });
}

export const down = async (knex: Knex): Promise<Knex.SchemaBuilder> => {
    return knex.schema.dropTableIfExists(tableName)
}