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


// router.get('/childs', async (req,res,next)=>{
//   try {
//     const allTweets = await tweetsModel.getTweetsChild();
//     res.json(allTweets);
//   } catch (error) {
//     next()
//   }
// })

// router.get('/parent', async (req,res,next)=>{
//   try {
//     const allTweets = await tweetsModel.getAllTweetsParent();
//     res.json(allTweets);
//   } catch (error) {
//     next()
//   }
// })



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