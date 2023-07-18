//Outsource JS library
import React,{useEffect,useContext} from 'react'

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import TweetCard from './TweetCard';


function HomePageFirstPage() {

const [getTweets, tweets, loading, error] = useAxios([]);

useEffect(() => {
  getTweets({ endpoint: "/api/tweets/mainpage", reqType: REQ_TYPES.GET });
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

export default HomePageFirstPage