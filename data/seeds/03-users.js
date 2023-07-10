/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {name: 'Serkan',password:'$2a$08$bFKTEjOeG4uP5kvsFkY9EOwvB0/C87.qEBRPuPxRqoL15/5OrYapq',userName:'FullStackDeveloper00001',dateJoined:"18.05.2023",userEmail:"serkan_toraman@hotmail.com",role_id:1,tweet_id:1 },
    {name: 'Mine',password:'$2a$08$bFKTEjOeG4uP5kvsFkY9EOwvB0/C87.qEBRPuPxRqoL15/5OrYapq',userName:'Architect0001',dateJoined:"18.06.2023",userEmail:"mine@hotmail.com",role_id:2,tweet_id:2 },
    {name: 'Musacan',password:'$2a$08$bFKTEjOeG4uP5kvsFkY9EOwvB0/C87.qEBRPuPxRqoL15/5OrYapq',userName:'Student0001',dateJoined:"19.06.2023",userEmail:"musacan@hotmail.com",role_id:3,tweet_id:3},  
  ]);
};
