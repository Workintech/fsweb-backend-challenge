//Imports
const router = require('express').Router();
const { checkRole } = require('../Auth/auth-middleware');
const userModel = require('./users-model');

//Middlewares--


//Routers
router.get('/', async (req,res,next)=>{
  try {
    const usersDetail = await userModel.getAll();
    res.json(usersDetail);
  } catch (error) {
    next()
  }
})

router.get('/tweets', async (req,res,next)=>{
  try {
    const usersTweets = await userModel.getTweetsByUser();
    res.json(usersTweets);
  } catch (error) {
    next()
  }
})

router.get('/tweetreplies', async (req,res,next)=>{
  try {
    const tweetReplies = await userModel.getTweetRepliesByID();
    res.json(tweetReplies);
  } catch (error) {
    next()
  }
})

//4 Errors -- Server has an errorfunc for all

//5 Exports
module.exports=router;