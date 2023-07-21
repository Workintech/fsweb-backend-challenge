//Outsource JS library
import React,{useEffect,useContext, useState} from 'react'
import { useSelector } from "react-redux";


//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import TweetCard from './TweetCard';



function HomePageFirstPage() {

const [getTweets, tweets, loading, error] = useAxios([]);
const button =useSelector((store) => store.tweetReducer.buttonCount);

useEffect(()=>{
  getTweets({ endpoint: "/api/tweets/mainpage", reqType: REQ_TYPES.GET })
},[button])
  


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