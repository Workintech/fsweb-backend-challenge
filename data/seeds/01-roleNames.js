/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('roleNames').truncate()
  await knex('roleNames').insert([
    {roleName:"Admin"},
    {roleName:"BlueTickedUser"},
    {roleName:"User"},
  ]);
};
