/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('likes').insert([
    {user_id: 1, tweet_id: 1},
    {user_id: 2, tweet_id: 1},
    {user_id: 3, tweet_id: 1},
    {user_id: 1, tweet_id: 2},
    {user_id: 2, tweet_id: 2},
    {user_id: 3, tweet_id: 2},
    {user_id: 3, tweet_id: 12},
  ]);
};
