const db = require('../../data/dbConfig');

// async function getAllTweets(){
//   const tweetRawData = await db('tweets as t')
//                                 .join('users as u','t.user_id','u.user_id')
//                                 .select('u.name','u.userName','t.tweet_id','t.tweet','t.created_at')
//                                 .orderBy('t.created_at','desc') 

//               return tweetRawData;
// }
// async function getTweetByTweetId(id){
//   const getTweetData = await db('tweets as t')
//                               .join('users as u','t.user_id','u.user_id')
//                               .select('u.name','u.userName','t.tweet_id','t.tweet','t.created_at')
//                               .where('t.tweet_id',id)

//         return getTweetData;
// }

async function insertTweet(payload){ 
      const[id] = await db('tweets').insert(payload);
      return await getTweetByTweetId(id);
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
                               

  const allTweetReplies = await getTweetsChild();
  

  const allTweetsData = tweetRawData.reduce((acc,allTweetsItem)=>{
    //check if newtweet
    const registeredTweet = acc.find(tweet=>tweet.tweet_id ===allTweetsItem.tweet_id)  
    //NewModel
    let tweetReplies = allTweetReplies.filter(filterItem => filterItem.parentTweet_id=== allTweetsItem.tweet_id);

    if(!registeredTweet){
        const newTweet ={
          tweet_id:allTweetsItem.tweet_id,
          tweet:allTweetsItem.tweet,
          name:allTweetsItem.name,
          userName:allTweetsItem.userName,
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

module.exports={
  getAllTweetsParent,
  insertTweet,
  getTweetsChild,
}