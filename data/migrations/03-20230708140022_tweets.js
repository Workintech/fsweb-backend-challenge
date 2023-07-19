/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tweets',tweets=>{
    tweets.increments('tweet_id')
    tweets.integer('parent_id').unsigned()
    tweets.string('tweet')
    tweets.timestamp('created_at',{ useTz: true })
            .notNullable()
            .defaultTo(knex.fn.now())
    tweets.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tweets')  
};
