const db = require('../../data/dbConfig');

async function getAllTweetLikesById(){
  const likesRawData = await db('likes as l')
                              .leftJoin('tweets as t','l.tweet_id','t.tweet_id')
                              .leftJoin('users as u','l.user_id','u.user_id')
                              .select('t.tweet_id')
                              .count('u.user_id as like_count')
                              .groupBy('t.tweet_id')                             
                              
    return likesRawData;
} 

async function getAllTweetLikesGrouping(){
  const likesRawData = await db('likes as l')
                              .leftJoin('tweets as t','l.tweet_id','t.tweet_id')
                              .leftJoin('users as u','l.user_id','u.user_id')
                              .select('t.tweet_id','l.user_id')
                                                                                      
  const allLikesData = likesRawData.reduce((acc,allLikesItem)=>{

    const registeredTweet = acc.find(tweet=>tweet.tweet_id ===allLikesItem.tweet_id);

    const newLike = {
      user_id:allLikesItem.user_id
    }

    if(!registeredTweet){
      const newTweet={
        tweet_id:allLikesItem.tweet_id,
        likes:[]
      }
      if(allLikesItem.user_id){
        newTweet.likes.push(newLike)
      }
      acc.push(newTweet);
    }else{
      registeredTweet.likes.push(newLike)
    }
    return acc;
  },[])
  return allLikesData;
} 

async function insertTweetLike(payload){
  await db('likes').insert(payload)
  return getAllTweetLikesById();
}

async function deleteTweetLike(payload){
  await db('likes').where('user_id',payload.user_id).andWhere('tweet_id',payload.tweet_id).del()
  return getAllTweetLikesById();
}

module.exports={
  getAllTweetLikesById,
  insertTweetLike,
  deleteTweetLike,
  getAllTweetLikesGrouping
}

exports.getTweetsChild = getAllTweetLikesGrouping;

