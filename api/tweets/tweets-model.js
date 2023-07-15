const db = require('../../data/dbConfig');

async function getAllTweets(){
  const tweetRawData = await db('tweets as t')
                                .join('users as u','t.user_id','u.user_id')
                                .select('u.name','u.userName','t.tweet_id','t.tweet','t.created_at')
                                .orderBy('t.created_at','desc') 

              return tweetRawData;
}

async function getTweetByTweetId(id){
  const getTweetData = await db('tweets as t')
                              .join('users as u','t.user_id','u.user_id')
                              .select('u.name','u.userName','t.tweet_id','t.tweet','t.created_at')
                              .where('t.tweet_id',id)

        return getTweetData;
}



async function insertTweet(payload){ 
      const[id] = await db('tweets').insert(payload);
      return await getTweetByTweetId(id);
}

async function getAllCascadingTweetReplies(){
  const tweetReplies = await db('tweetReplies as tr')
                                .join('tweetReplies as utr','tr.tweetReply_id','utr.upperTweetReply_id')
                                .select('r.tweetReply_id','r.reply','r.tweet_id','r.user_id')

              return tweetReplies
}
async function getALLTweetReplies (){
  const tweetReplies = await db('tweetReplies as tr')
                          .leftJoin('users as u','u.user_id','tr.user_id')
                          .select('tr.user_id','u.userName','tr.tweetReply_id','tr.reply','tr.tweet_id')
                        
          return tweetReplies
}


async function getAllTweetsByUser(){
  const rawData = await db('users as u')
                          .leftJoin('tweets as t','u.user_id','t.user_id')
                          .select('u.user_id','u.userName','t.tweet','t.tweet_id',)
                          .orderBy('u.user_id','asc') 
                          
  const allTweetReplies= await getALLTweetReplies();
  const output= rawData.reduce((acc,item)=>{
    //Check if new user?
    const registeredUser = acc.find(user=>user.user_id===item.user_id)
    //New Model
      const tweetModel ={
        tweet_id:item.tweet_id,
        tweet:item.tweet, 
        tweetReplies:[]    
      }
      //Adding TweetReplies into tweetModel
      let tweetReplies = allTweetReplies.filter(filterItem=>filterItem.tweet_id === item.tweet_id);  
      tweetModel.tweetReplies = tweetReplies.reduce((acc,item)=>{
            let a= {
            user_id: item.user_id,
            userName: item.userName,
            tweetReply_id:item.tweetReply_id, 
            reply:item.reply, 
            }
            acc.push(a);
            return acc;
          },[])
      //Add a new user if there no user
      if(!registeredUser){
            const newUser ={
              user_id : item.user_id,
              userName: item.userName,
              tweets : [],
              }
            if(item.tweet_id){
              newUser.tweets.push(tweetModel)
            }
            acc.push(newUser);
      //Add the existing user if exists
        }else{
          registeredUser.tweets.push(tweetModel)
        }
      return acc;
    },[])
    
  return output;
}


module.exports={
  getAllTweetsByUser,
  getALLTweetReplies,
  getAllCascadingTweetReplies,
  getAllTweets,
  getTweetByTweetId,
  insertTweet
}