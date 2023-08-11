//Outsource JS Library
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

//Internal JS
import SingleTweet from './SingleTweet'
import TweetCard from '../HomePage/TweetCard';
import useAxios,{REQ_TYPES} from '../../endpoints/UseAxios'
import SendChildTweet from './SendChildTweet';


function SingleTweetPage() {
  const {tweetid} = useParams();
  const button =useSelector((store) => store.tweetReducer.buttonCount);
  const [getChildTweetsById, childTweetById, loading, error] = useAxios([]);

  useEffect(() => {
    getChildTweetsById({ endpoint: "/api/tweets/"+tweetid+'/c', reqType: REQ_TYPES.GET });
    //console.log('buttonsingke',button)
  }, [button]);
 


  return (
    <>
    <SingleTweet/>
    <SendChildTweet/>
    <div id="SingleTweetChildTweetsWrapper">
    {childTweetById.map((tweetitem,i)=>(<TweetCard
        tweet={tweetitem}
        key={i}
        />
      ))}
      </div>
    </>
  )
}

export default SingleTweetPage