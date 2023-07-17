//Outsource JS library
import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import TweetCard from '../HomePage/TweetCard';

function UserTweetsList() {

const {tweetid,userName} = useParams();

const [getTweets, tweets, loading, error] = useAxios([]);


useEffect(() => {
  getTweets({ endpoint: "/api/tweets/mainpage/"+userName, reqType: REQ_TYPES.GET });
}, [tweets]);



  return (
    <div id='tweetCardsMainContainer'>
     {tweets.map((tweetitem,i)=>(<TweetCard
        tweet={tweetitem}
        key={i}
        />
      ))}
    </div>
  )
}

export default UserTweetsList