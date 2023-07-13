const db = require('../../data/dbConfig');

function getAll() {
  return db('users');
}

function getById(id) {
  return db('users').where('id', id).first();
}

function getByFilter(filter) {
  return db('users').where(filter);
}




module.exports={
  getAll,
  getById,
  getByFilter,
}