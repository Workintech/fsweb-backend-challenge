//Imports
const router = require('express').Router();
const tweetsModel = require('./tweets-model');

//Middlewares--


//Routers

router.get('/', async (req,res,next)=>{
  try {
    const allTweets = await tweetsModel.getAllTweets();
    res.json(allTweets);
  } catch (error) {
    next()
  }
})

// router.get('/', async (req,res,next)=>{
//   try {
//     const usersTweets = await tweetsModel.getAllTweetsByUser();
//     res.json(usersTweets);
//   } catch (error) {
//     next()
//   }
// })
router.get('/replies', async (req,res,next)=>{
  try {
    const usersTweets = await tweetsModel.getAllCascadingTweetReplies();
    res.json(usersTweets);
  } catch (error) {
    next()
  }
})

router.post('/newtweet', async (req,res,next)=>{
  try {
    const{user_id,tweet}=req.body;
    const insertTweetData ={
      user_id : user_id,
      tweet :tweet,
    }
    const insertedTweet = await tweetsModel.insertTweet(insertTweetData)
    res.status(201).json(insertedTweet);
  } catch (error) {
    next(error)
  }
})


//4 Errors -- Server has an errorfunc for all

//5 Exports
module.exports=router;