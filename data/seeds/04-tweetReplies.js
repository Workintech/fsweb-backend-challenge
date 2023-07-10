/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tweetReplies').truncate()
  await knex('tweetReplies').insert([
    {reply:"Reply Deneme 1.1",tweet_id:1,user_id:1},
    {reply:"Reply Deneme 1.2",tweet_id:1,user_id:2},
    {reply:"Reply Deneme 2.1",tweet_id:2,user_id:3},
    {reply:"Reply Deneme 2.2",tweet_id:2,user_id:2},
    {reply:"Reply Deneme 2.3",tweet_id:2,user_id:3},
  ]);
  
};
