//Imports
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const {JWT_SECRET,HASHCOUNT} =require('../../config/index');
const { mwRegisterCheckPaylodad, mwRegisterUser,mwLoginCheckPayload,mwLoginUser,mwRestricted,logout } = require('./auth-middleware');
const authModel = require('./auth-model')
const tokenHelper = require('../../helper/token-helper')


//Routers
router.post('/register',mwRegisterCheckPaylodad,mwRegisterUser, async(req,res,next)=>{
  try {
    const insertedUserData ={
      name : req.name,
      password : req.password,
      userEmail : req.userEmail,
      userName : req.userName,
      dateJoined: new Date(),
    }
    insertedUserData.password = bcrypt.hashSync(insertedUserData.password,HASHCOUNT);
    const insertedUser = await authModel.insertUser(insertedUserData)
    res.status(201).json(insertedUser)
    
  } catch (error) {
    next(error)
  }
})

router.post('/login',mwLoginCheckPayload,mwLoginUser,async (req,res,next)=>{
  try {
    const tokenPayload ={
      loginDataName: req.userData.userName,
      password: req.userData.password,
    }
    const token = await tokenHelper.generateToken(tokenPayload);
    res.json({
      name:req.userData.name,
      id:req.userData.user_id,
      roleName:req.userData.roleName,
      token: token
    });
    
  } catch (error) {
    next(error)
  }

})

router.get('/logout', mwRestricted, (req,res,next)=>{
  try {
    res.json({message: 'Successfully loggedout'})
  } catch (error) {
    next(error)
  } 
})
redis://default:imSOGYap5Az181bkHIdyOgYAZ9acwJMd@redis-11156.c15.us-east-1-2.ec2.cloud.redislabs.com:11156


//Exports
module.exports=router;