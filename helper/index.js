const tweetModel =require('../api/tweets/tweets-model')
const likeModel = require('../api/likesFollowers/likesFollwers-model')

const formatTweets = async (rawOrders)=>{

const allTweetReplies = await tweetModel.getTweetsChild();
const allTweetLikes = await likeModel.getAllTweetLikesGrouping();
  

  const allTweetsData = rawOrders.reduce((acc,allTweetsItem)=>{
    //check if newtweet
    const registeredTweet = acc.find(tweet=>tweet.tweet_id ===allTweetsItem.tweet_id)  
    //NewModel
    let tweetReplies = allTweetReplies.filter(filterItem => filterItem.parentTweet_id=== allTweetsItem.tweet_id);
    let likes;
    let likeObject = allTweetLikes.find(tweet=>tweet.tweet_id===allTweetsItem.tweet_id);
    if(!likeObject){
      likes=[];
    }else{
      likes=likeObject.likes
    }
    

    if(!registeredTweet){
        const newTweet ={
          tweet_id:allTweetsItem.tweet_id,
          tweet:allTweetsItem.tweet,
          name:allTweetsItem.name,
          userName:allTweetsItem.userName,
          user_id:allTweetsItem.user_id,
          likes:likes,
          created_at:allTweetsItem.created_at,
          replies:[]
        }
        newTweet.replies.push(...tweetReplies)
        acc.push(newTweet);
    }else{
      registeredTweet.replies.push(...tweetReplies)
    }
    return acc;
  },[])
  return allTweetsData;

}

module.exports = {
  formatTweets
}