import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Order', table => {
    table.increments('id').primary();
    table.string('descricao', 50).notNullable();
    table.string('quantidade', 50).notNullable();
    table.string('valor', 50).notNullable()
    table.dateTime('createdDate').nullable();
    table.dateTime('updatedDate').nullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('Order');
}
