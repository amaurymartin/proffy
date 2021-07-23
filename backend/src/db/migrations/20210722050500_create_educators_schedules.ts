import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('educators_schedules', (table) => {
    table.increments();

    table.integer('educator_id').notNullable();
    table
      .foreign('educator_id')
      .references('id')
      .inTable('educators')
      .onDelete('CASCADE');

    table.integer('week_day').notNullable();
    table.time('starts_at').notNullable();
    table.time('ends_at').notNullable();

    table.unique(['educator_id', 'week_day', 'starts_at']);

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('educators_schedules');
}
