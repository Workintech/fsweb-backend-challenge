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

async function getTweetsByUser(){
    const rawData = await db('users as u')
                            .leftJoin('tweets as t','u.user_id','t.user_id')
                            .select('u.user_id','u.userName','t.tweet','t.tweet_id')
                            .orderBy('u.user_id','asc') 
                            

    const output= rawData.reduce((acc,item)=>{
      const registeredUser = acc.find(user=>user.user_id===item.user_id)
        const newTweet ={
          tweet_id:item.tweet_id,
          tweet:item.tweet     
        }
        if(!registeredUser){
              const newUser ={
                user_id : item.user_id,
                userName: item.user_name,
                tweets : [],
                }
              if(item.tweet_id){
                newUser.tweets.push(newTweet)
              }
              acc.push(newUser);
          }else{
            registeredUser.tweets.push(newTweet)
          }    
        return acc;
      },[])
  return output;
}

module.exports={
  getAll,
  getById,
  getByFilter,
  getTweetsByUser
}