/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('likes',likes=>{
    likes.increments('like_id')
    likes.integer('user_id')
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    likes.integer('tweet_id')
            .references('tweet_id')
            .inTable('tweets')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('likes')  
};
