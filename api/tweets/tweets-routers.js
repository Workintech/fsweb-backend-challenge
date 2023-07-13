//Imports
const router = require('express').Router();
const tweetsModel = require('./tweets-model');

//Middlewares--


//Routers

router.get('/', async (req,res,next)=>{
  try {
    const usersTweets = await tweetsModel.getAllTweetsByUser();
    res.json(usersTweets);
  } catch (error) {
    next()
  }
})
router.get('/replies', async (req,res,next)=>{
  try {
    const usersTweets = await tweetsModel.getAllCascadingTweetReplies();
    res.json(usersTweets);
  } catch (error) {
    next()
  }
})


//4 Errors -- Server has an errorfunc for all

//5 Exports
module.exports=router;