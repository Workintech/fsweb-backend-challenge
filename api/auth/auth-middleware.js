const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET,HASHCOUNT} =require('../../config')

const authModel = require('./auth-model')

//Register

const mwRegisterCheckPaylodad = async(req,res,next) => { 
  const {name,password,userEmail,userName}=req.body;
  
  if(name&&password&&userEmail&&userName){
    next();
  }else{
    res.status(401).json({
      message: "Lütfen tüm kısımları doldurunuz."
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
          res.status(401).json({message:"Kullanıcı adı kullanılmaktadır"})
        
      }else if(userName.length>32){
          res.status(422).json({message:"Kullanıcı adı 32 harften fazla olmamalıdır"})  
      }else{ 
        req.userName=userName
      }

    userEmail=userEmail.trim()
    isUserExist = await authModel.findBy({userEmail:userEmail})   
    if(isUserExist&&isUserExist.userEmail){
      res.status(401).json({message:"Email kullanılmaktadır"})
    }else if(!userEmail.match(emailRegex)){
      res.status(422).json({message:"Lütfen geçerli bir e-mail giriniz."})
    }else{
      req.userEmail=userEmail
    }
    password=password.trim();
    if(password.length<8){
      res.status(422).json({message:"Şifre adı 32 harften fazla olmamalıdır"})
    }else{
      req.password=password;
    }
    name=name.trim();
    if(name.length>328){
      res.status(422).json({message:"İsim 32 harften fazla olmamalıdır"})
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
      message: "Lütfen tüm kısımları doldurunuz."
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
        res.status(401).json({message:'Geçersiz Kullanıcı ismi yada E-mail'})
      }
  }else{
    isUserExist = await authModel.findBy({userName:loginDataName});
      if(!isUserExist){
        res.status(401).json({message:'Geçersiz Kullanıcı ismi yada E-mail'})
      }
  }
  if(bcrypt.compareSync(password,isUserExist.password)){
    req.userData = isUserExist;
    next();
  }else{
    res.status(401).json({message:'Geçersiz Şifre'})
  }
  } catch (error) {
    next(error)
  }
}




module.exports = {
  mwRegisterCheckPaylodad,
  mwRegisterUser,
  mwLoginCheckPayload,
  mwLoginUser
}