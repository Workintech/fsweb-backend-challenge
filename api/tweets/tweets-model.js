const db = require('../../data/dbConfig');
const {formatTweets } = require('../../helper/index')

async function getTweetById(id){
  const tweetRawData = await db('tweets as t')
                                .join('users as u','t.user_id','u.user_id')
                                .select('u.name','u.userName','t.tweet_id','t.tweet','t.created_at')
                                .where('t.tweet_id',id)
                                .first()
  return tweetRawData;
}


async function insertTweet(payload){ 
      const[id] = await db('tweets').insert(payload);
      return await getTweetById(id);
}


async function getTweetsChild(){ 
  const tweetChildRawData = await db('tweets as t')
                              .innerJoin('tweets as tp','t.parent_id','tp.tweet_id')
                              .select('t.tweet as childTweet','t.tweet_id as childTweet_id','tp.tweet_id as parentTweet_id')
                              .orderBy('t.created_at','desc') 

  return tweetChildRawData;
}


async function getAllTweetsParent(){
  const tweetRawData = await db('tweets as t')
                                .join('users as u','t.user_id','u.user_id')
                                .select('u.name','u.userName','t.tweet_id','t.tweet','t.created_at')
                                .whereNull('t.parent_id') 
                                .orderBy('t.created_at','desc')
    
  return formatTweets(tweetRawData);
}

async function getAllChildTweetsbyParentID(id){
  const tweetRawData = await db('tweets as t')
                                .join('users as u','t.user_id','u.user_id')
                                .select('u.name','u.userName','t.tweet_id','t.tweet','t.created_at')
                                .where('t.parent_id',id) 
                                .orderBy('t.created_at','desc')
    
  return formatTweets(tweetRawData);
}

module.exports={
  getAllTweetsParent,
  insertTweet,
  getAllChildTweetsbyParentID,
  getTweetById
}
exports.getTweetsChild = getTweetsChild;