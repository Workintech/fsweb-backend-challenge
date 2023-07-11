/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tweets').truncate()
  await knex('tweets').insert([
    {tweet:"Tweet Deneme 1",user_id:1},
    {tweet:"Tweet Deneme 2",user_id:1},
    {tweet:"Tweet Deneme 3",user_id:1},
    {tweet:"Tweet Deneme 4",user_id:2},
    {tweet:"Tweet Deneme 5",user_id:2},
    {tweet:"Tweet Deneme 6",user_id:3},
  ]);
};
