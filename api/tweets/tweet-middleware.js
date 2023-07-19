const tweetModel =require('./tweets-model')

const mwTweetExistCheck = async(req,res,next) => { 
  try {
    const {tweet_id}=req.body;
    const tweetData = await tweetModel.getTweetById(tweet_id)
    !tweetData ? res.status(404).json({message:`Tweet doesn't exist`}):next()
    
  
  } catch (error) {
    next()
  }
  
}

module.exports = {
  mwTweetExistCheck
}