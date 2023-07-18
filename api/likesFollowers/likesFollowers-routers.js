//Imports
const router = require('express').Router();
const likesModel = require('./likesFollwers-model');

//Middlewares


//Routers

router.get('/', async (req,res,next)=>{
  try {
    const allLikes = await likesModel.getAllTweetLikesById();
    res.json(allLikes);
  } catch (error) {
    next()
  }
})
router.get('/groups', async (req,res,next)=>{
  try {
    const allLikes = await likesModel.getAllTweetLikesGrouping();
    res.json(allLikes);
  } catch (error) {
    next()
  }
})
router.post('/like', async (req,res,next)=>{
  try {
    const {user_id,tweet_id}=req.body;
    const allLikes = await likesModel.insertTweetLike({user_id:user_id,tweet_id:tweet_id});
    res.json(allLikes);
  } catch (error) {
    next()
  }
})

router.post('/likes', async (req,res,next)=>{
  try {
    const {user_id,tweet_id}=req.body;
    const allLikes = await likesModel.deleteTweetLike({user_id:user_id,tweet_id:tweet_id});
    res.json(allLikes);
  } catch (error) {
    next()
  }
})


//Errors

//Exports
module.exports=router;