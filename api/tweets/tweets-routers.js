//Imports
const router = require('express').Router();
const tweetsModel = require('./tweets-model');

//Middlewares--


//Routers

router.get('/mainpage', async (req,res,next)=>{
  try {
    const allTweets = await tweetsModel.getAllTweetsParent();
    res.json(allTweets);
  } catch (error) {
    next()
  }
})


router.get('/:id/c', async (req,res,next)=>{
  try {
    const allTweets = await tweetsModel.getAllChildTweetsbyParentID(req.params.id);
    res.json(allTweets);
  } catch (error) {
    next()
  }
})

router.get('/:id', async (req,res,next)=>{
  try {
    const allTweets = await tweetsModel.getTweetById(req.params.id);
    res.json(allTweets);
  } catch (error) {
    next()
  }
})
router.get('/mainpage/:id', async (req,res,next)=>{
  try {
    const allTweets = await tweetsModel.getAllTweetsParentByUser(req.params.id);
    res.json(allTweets);
  } catch (error) {
    next()
  }
})

router.post('/newtweet', async (req,res,next)=>{
  try {
    const{user_id,tweet, parent_id }=req.body;
    const date = new Date().toISOString()
    const insertTweetData ={
      user_id : user_id,
      parent_id:parent_id,
      tweet :tweet,
      created_at:date
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