//External JS
import React,{useState,useContext,useEffect} from 'react'

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import { AuthContext } from '../../context/AuthContext';

function DropDownMenu({tweet,setDropDownUnique}) {

  const [deleteTweets, deletedTweets, loading, error] = useAxios([]);
  const {loginData} = useContext(AuthContext);
  useEffect(()=>{
    console.log("tweet",tweet)
  },[])



 const deleteTweetSubmit=(data)=> {
  console.log("data",data)
  deleteTweets({endpoint: '/api/tweets', reqType:REQ_TYPES.POST,payload:data });
  setDropDownUnique(false)
};


  return (
   <nav id="dropDownNav">
      <button id="item1" disabled={loginData.roleName==='Admin'||loginData.id===tweet.user_id?false:true} onClick={(e)=>{e.stopPropagation();deleteTweetSubmit({user_id:loginData.id,tweet_id:tweet.tweet_id})}}>Delete</button>
   </nav>
  )
}
export default DropDownMenu