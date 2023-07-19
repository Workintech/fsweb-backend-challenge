//Imports
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const {JWT_SECRET,HASHCOUNT} =require('../../config/index');
const { mwRegisterCheckPaylodad, mwRegisterUser,mwLoginCheckPayload,mwLoginUser } = require('./auth-middleware');
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
      loginDataName: req.userData.loginDataName,
      password: req.userData.password,
    }
    const token = tokenHelper.generateToken(tokenPayload);
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



//Exports
module.exports=router;