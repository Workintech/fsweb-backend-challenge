const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const redis = require('redis');
// const client = redis.createClient();


const {JWT_SECRET,HASHCOUNT} =require('../../config')
const authModel = require('./auth-model')


// async function connection(){
//   await client.connect();
// }
// connection();

//Register

const mwRegisterCheckPaylodad = async(req,res,next) => { 
  const {name,password,userEmail,userName}=req.body;
  
  if(name&&password&&userEmail&&userName){
    next();
  }else{
    res.status(401).json({
      message: "Please fillout all inputs"
    })
  }
}
const mwRegisterUser = async (req,res,next)=>{
  try {
    let {name,password,userEmail,userName}=req.body;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    userName=userName.trim()
    let isUserExist = await authModel.findBy({userName:userName})
      if(isUserExist&&isUserExist.userName){
          res.status(401).json({message:"Username is already taken"})
        
      }else if(userName.length>32){
          res.status(422).json({message:"Username cannot be longer than 32 characters"})  
      }else{ 
        req.userName=userName
      }

    userEmail=userEmail.trim()
    isUserExist = await authModel.findBy({userEmail:userEmail})   
    if(isUserExist&&isUserExist.userEmail){
      res.status(401).json({message:"E-mail is already taken"})
    }else if(!userEmail.match(emailRegex)){
      res.status(422).json({message:"Please enter a valid E-mail address"})
    }else{
      req.userEmail=userEmail
    }
    password=password.trim();
    if(password.length<8){
      res.status(422).json({message:"Password cannot be shorter than 8 characters"})
    }else{
      req.password=password;
    }
    name=name.trim();
    if(name.length>328){
      res.status(422).json({message:"Name cannot be longer than 32 characters"})
    }else{
      req.name=name;
      next();
    }   
  }catch (error) {
    next(error)
  }
}
//Login
const mwLoginCheckPayload = async(req,res,next) => { 
  const {password,loginDataName}=req.body;
  if(password&&loginDataName){
    next();
  }else{
    res.status(401).json({
      message: "Please fillout all inputs"
    })
  }
}

const mwLoginUser = async(req,res,next) =>{
  try {
    const {password,loginDataName}=req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let isUserExist;
  if(loginDataName.match(emailRegex)){
    isUserExist = await authModel.findBy({userEmail:loginDataName});
      if(!isUserExist){
        res.status(401).json({message:'Please enter a valid username or E-mail address'})
      }
  }else{
    isUserExist = await authModel.findBy({userName:loginDataName});
      if(!isUserExist){
        res.status(401).json({message:'Please enter a valid username or E-mail address'})
      }
  }
  if(bcrypt.compareSync(password,isUserExist.password)){
    req.userData = isUserExist;
    next();
  }else{
    res.status(401).json({message:'Please enter a valid password'})
  }
  } catch (error) {
    next(error)
  }
}

//Restricted

const mwRestricted = async(req,res,next)=>{
try {
  const token = req.headers.authorization;
  if(token){
    // const tokenValue = await client.get(token);
    // if(tokenValue){
      jwt.verify(token,JWT_SECRET,(err,decodedJWT)=>{
        if(err){
          res.status(401).json({message:"Token is invalid"})
        }else{
          req.decodedJWT=decodedJWT
          next()}
      }) 
    // }  
  }else{
    res.status(403).json({message: "Token is required"})
  }
} catch (error) {
  next(error)
}
}
//Logout

// const logout = async (req,res,next)=> {
//   try {
//       const token = req.headers.authorization;
//       await client.del(token);
//       next();
//   } catch(err) {
//       next(err)
//   }
// }




module.exports = {
  mwRegisterCheckPaylodad,
  mwRegisterUser,
  mwLoginCheckPayload,
  mwLoginUser,
  mwRestricted,
  //logout
}