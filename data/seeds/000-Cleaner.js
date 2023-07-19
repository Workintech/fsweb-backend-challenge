/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('roleNames').truncate()
  await knex('users').truncate()
  await knex('tweets').truncate()
  await knex('likes').truncate()
 
  
};