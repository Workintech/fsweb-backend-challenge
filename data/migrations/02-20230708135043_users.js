/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users',users =>{
    users.increments('user_id')
    users.string('name',100).notNullable()
    users.string('password',32).notNullable()
    users.string('userName',100).notNullable().unique()
    users.date('dateJoined').notNullable()
    users.string('userEmail',100).notNullable().unique()
    users.integer('role_id')
        .defaultTo(3)
        .unsigned()
        .notNullable()
        .references('role_id')
        .inTable('roleNames')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
