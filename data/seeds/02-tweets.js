/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tweets').truncate()
  await knex('tweets').insert([
    {tweet:"Tweet Deneme 1"},
    {tweet:"Tweet Deneme 2"},
    {tweet:"Tweet Deneme 3"},
  ]);
};
