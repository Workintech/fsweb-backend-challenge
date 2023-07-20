const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require('../config/index')
const redis = require('redis');
const client = redis.createClient();

async function connection(){
    await client.connect();
}
connection();

async function generateToken(payload){
  const token = jwt.sign(payload,JWT_SECRET,{expiresIn:"3h"})
  await client.set(token, 1, {EX: 60*60*3})  //3 saat olarak expire süresi verdik
  return token;
}

module.exports = {
  generateToken,
  
}