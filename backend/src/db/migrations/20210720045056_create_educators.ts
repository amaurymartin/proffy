import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('educators', (table) => {
    table.increments();

    table.uuid('key').notNullable();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio');

    table.unique(['key']);
    table.unique(['email']);
    table.unique(['whatsapp']);

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('educators');
}
