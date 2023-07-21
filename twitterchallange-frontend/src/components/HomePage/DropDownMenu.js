//External JS
import React,{useContext,useEffect} from 'react';
import { useDispatch } from "react-redux";

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import { AuthContext } from '../../context/AuthContext';
import { setHomePageResetDecrease } from '../../store/actions/tweetAction';


function DropDownMenu({tweet,setDropDownUnique}) {
  const dispatch = useDispatch();

  const [deleteTweets, deletedTweets, loading, error] = useAxios([]);
  const {loginData} = useContext(AuthContext);

  // useEffect(()=>{
  //   console.log("tweet",tweet)
  // },[])
  
 const deleteTweetSubmit= async (data)=> {
  await deleteTweets({endpoint: '/api/tweets', reqType:REQ_TYPES.POST,payload:data });
  setDropDownUnique(false)
  dispatch(setHomePageResetDecrease())
};


  return (
   <nav id="dropDownNav">
      <button id="item1" disabled={loginData.roleName==='Admin'||loginData.id===tweet.user_id?false:true} onClick={(e)=>{e.stopPropagation();deleteTweetSubmit({user_id:loginData.id,tweet_id:tweet.tweet_id})}}>Delete</button>
   </nav>
  )
}
export default DropDownMenu