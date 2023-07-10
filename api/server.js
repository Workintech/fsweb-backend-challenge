//Imports
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router')


//Middlewares
server.use(helmet());
server.use(cors());
server.use(express.json());

//Routers
//Smoke test
// server.get('/',(req,res)=>{
//   res.json('smoke test successfull')
// })
server.use('/api/auth',authRouter)


//4. error middleware

server.use((err,req,res,next)=>{
  res.status(err.status || 500)
      .json({message: err.message || "Server error!..."})
})

//export
module.exports = server;