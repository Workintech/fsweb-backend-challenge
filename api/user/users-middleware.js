const userModel = require('./users-model')
const tweetModel =require('../tweets/tweets-model')


//Check if user is an admin or user of the tweet - if the user is neither admin nor tweet owner, the tweet cannot be deleted
const mwTweetDeleteAuthority = async(req,res,next) => { 
  try {
    
    const {user_id,tweet_id}=req.body;
    const userData = await userModel.getById(user_id);
    const tweetData = await tweetModel.getTweetById(tweet_id)
    if(userData.roleName==="Admin"||tweetData.user_id===user_id){
      req.idData = tweetData.tweet_id;
      next();
    }else{
      res.status(401).json({message:'No authority to delete'})
    }
  
  } catch (error) {
    next()
  }
  
}

module.exports = {
  mwTweetDeleteAuthority
}