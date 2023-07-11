//Imports
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router')
const userRouter = require('./user/users-routers')


//Middlewares
server.use(helmet());
server.use(express.json());

var corsOptions = {
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
server.use(cors(corsOptions))

//Routers
//Smoke test
// server.get('/',(req,res)=>{
//   res.json('smoke test successfull')
// })
server.use('/api/auth',authRouter)
server.use('/api/users',userRouter)


//4. error middleware

server.use((err,req,res,next)=>{
  res.status(err.status || 500)
      .json({message: err.message || "Server error!..."})
})

//export
module.exports = server;