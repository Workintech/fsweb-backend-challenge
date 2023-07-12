const db = require('../../data/dbConfig');

function getAll() {
  return db('users');
}

function getById(id) {
  return db('users').where('id', id).first();
}

function getByFilter(filter) {
  return db('users').where(filter);
}

async function getTweetRepliesByID (){
  const tweetReplies = await db('tweetReplies as tr')
                          .leftJoin('users as u','u.user_id','tr.user_id')
                          .select('tr.user_id','u.userName','tr.tweetReply_id','tr.reply','tr.tweet_id')
                        
          return tweetReplies
}


async function getTweetsByUser(){
  const rawData = await db('users as u')
                          .leftJoin('tweets as t','u.user_id','t.user_id')
                          .select('u.user_id','u.userName','t.tweet','t.tweet_id',)
                          .orderBy('u.user_id','asc') 
                          
  const allTweetReplies= await getTweetRepliesByID();
  const output= rawData.reduce((acc,item)=>{
    //Check if new user?
    const registeredUser = acc.find(user=>user.user_id===item.user_id)
      const tweetModel ={
        tweet_id:item.tweet_id,
        tweet:item.tweet, 
        tweetReplies:[]    
      }
      let tweetReplies = allTweetReplies.filter(filterItem=>filterItem.tweet_id === item.tweet_id);
      tweetModel.tweetReplies = tweetReplies;


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
        }else{
          registeredUser.tweets.push(tweetModel)
        }
      return acc;
    },[])
    
  return output;
}


module.exports={
  getAll,
  getById,
  getByFilter,
  getTweetsByUser,
  getTweetRepliesByID
}