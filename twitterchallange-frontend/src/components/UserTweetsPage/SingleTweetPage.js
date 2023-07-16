//Outsource JS Library
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';

//Internal JS
import SingleTweet from './SingleTweet'
import SingleTweetChildTweets from './SingleTweetChildTweets'
import useAxios,{REQ_TYPES} from '../../endpoints/UseAxios'
import SendChildTweet from './SendChildTweet';


function SingleTweetPage() {
  const {tweetid} = useParams();

  const [getChildTweetsById, childTweetById, loading, error] = useAxios([]);
  useEffect(() => {
    getChildTweetsById({ endpoint: "/api/tweets/"+tweetid+'/c', reqType: REQ_TYPES.GET });
  }, [childTweetById]);
 
    useEffect(()=>{
      console.log('useparam',tweetid)
    },[tweetid])

  return (
    <>
    <SingleTweet/>
    <SendChildTweet/>
    <div id="SingleTweetChildTweetsWrapper">
    {childTweetById.map((tweetitem,i)=>(<SingleTweetChildTweets
        tweet={tweetitem}
        key={i}
        />
      ))}
      </div>
    </>
  )
}

export default SingleTweetPage