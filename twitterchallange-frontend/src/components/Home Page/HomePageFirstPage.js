//Outsource JS library
import React,{useEffect} from 'react'

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import TweetCard from './TweetCard';

function HomePageFirstPage() {

// const [getUsers, users, loading, error] = useAxios([]);


// useEffect(() => {
//   getUsers({ endpoint: "/api/users", reqType: REQ_TYPES.GET });
// }, []);
const [getTweets, tweets, loading, error] = useAxios([]);


useEffect(() => {
  getTweets({ endpoint: "/api/tweets", reqType: REQ_TYPES.GET });
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