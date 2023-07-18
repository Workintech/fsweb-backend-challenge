/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('likes',likes=>{
    likes.increments('like_id')
    likes.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
    likes.integer('tweet_id')
            .unsigned()
            .notNullable()
            .references('tweet_id')
            .inTable('tweets')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('likes')  
};
