const db = require('../../data/dbConfig');

 function getAll() {
  const userRawData =  db('users as u')
                            .leftJoin('roleNames as r','u.role_id','r.role_id')
                            .select('u.user_id','u.name','u.password','u.userName','u.dateJoined','u.userEmail','r.roleName')
  return userRawData;
}

function getById(id) {
  const userRawData =  db('users as u')
                            .leftJoin('roleNames as r','u.role_id','r.role_id')
                            .select('u.user_id','u.name','u.password','u.userName','u.dateJoined','u.userEmail','r.roleName')
                            .where('user_id',id)
                            .first()
  return userRawData;
}

function getByFilter(filter) {
  return db('users').where(filter);
}




module.exports={
  getAll,
  getById,
  getByFilter,
}