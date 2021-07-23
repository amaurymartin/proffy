import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('classes', (table) => {
    table.increments();

    table.integer('educator_id').notNullable();
    table
      .foreign('educator_id')
      .references('id')
      .inTable('educators')
      .onDelete('CASCADE');

    table.uuid('key').notNullable();
    table.string('subject').notNullable();
    table.string('description');
    table.decimal('price').notNullable().defaultTo(0);

    table.integer('status').notNullable().defaultTo(0);

    table.unique(['key']);
    table.unique(['educator_id', 'subject']);

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('classes');
}
