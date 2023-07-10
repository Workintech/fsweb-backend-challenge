/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tweetReplies',tweetReplies=>{
    tweetReplies.increments('tweetReply_id')
    tweetReplies.string('reply',255).notNullable()
    tweetReplies.integer('tweet_id')
                .unsigned()
                .notNullable()
                .references('tweet_id')
                .inTable('tweets')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
    tweetReplies.integer('user_id')
                .unsigned()
                .notNullable()
                .references('user_id')
                .inTable('users')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tweetreplies')
  
};
