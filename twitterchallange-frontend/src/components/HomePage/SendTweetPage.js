//Outsource JS library
import React,{useContext, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//Internal JS
import { AuthContext } from '../../context/AuthContext';
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import { setHomePageResetIncrease } from '../../store/actions/tweetAction';


function SendTweetPage() {
  const dispatch = useDispatch();
  const {loginData} = useContext(AuthContext);
  const [sendTweets, sentTweets, loading, error] = useAxios([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({mode:'onChange',
    defaultValues:{
      user_id:loginData.id,
      parent_id:null,
      tweet :"",
    }
  })
  
  const loginHandleSubmit = async (data) => {
    await sendTweets({endpoint:"/api/tweets/newtweet",reqType:REQ_TYPES.POST,payload:data});
    dispatch(setHomePageResetIncrease())
    reset();
  }




  return (
    <section id='sendTweetMainContainer'>
      <form id='sendTweetForm' onSubmit={handleSubmit(loginHandleSubmit)}>
          <label id="sendTweetLabel">Send your tweet</label>
          <textarea
          id='sendTweetInput'
          data-cy="loginDataName"
          type="text"
          placeholder="What is happening?!"
          maxLength="128"
          {...register("tweet")}
          />
          <div id='sendTweetButtonWrapper'>
            <button data-cy="sendTweetSbmtBtn"type="submit">Tweet</button>
          </div>
        
      </form>
    </section>
  )
}

export default SendTweetPage