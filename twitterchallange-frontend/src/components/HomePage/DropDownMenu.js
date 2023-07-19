//External JS
import React,{useState,useContext,useEffect} from 'react'

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import { AuthContext } from '../../context/AuthContext';

function DropDownMenu({tweet,setDropDownUnique}) {

  const [deleteTweets, deletedTweets, loading, error] = useAxios([]);
  const {loginData} = useContext(AuthContext);


 const deleteTweetSubmit=(id)=> {
  deleteTweets({endpoint: `/api/tweets/`+tweet.tweet_id, reqType: REQ_TYPES.DELETE,payload:id });
  setDropDownUnique(false)
};


  return (
   <nav id="dropDownNav">
      <button id="item1" disabled={loginData.id===tweet.user_id? false:true} onClick={(e)=>{e.stopPropagation();deleteTweetSubmit(loginData.id)}}>Delete</button>
   </nav>
  )
}
export default DropDownMenu