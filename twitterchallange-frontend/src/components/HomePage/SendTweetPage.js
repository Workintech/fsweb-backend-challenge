//Outsource JS library
import React,{useContext, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

//Internal JS
import { AuthContext } from '../../context/AuthContext';
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import { HomePageNavContext } from '../../context/HomePageNavContext';

function SendTweetPage() {

  const navigate =useNavigate();
  const {loginData} = useContext(AuthContext);
  const [sendTweets, tweets, loading, error] = useAxios([]);
  const {setHomePageCount} = useContext(HomePageNavContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:'onChange',
    defaultValues:{
      user_id:loginData.id,
      parent_id:null,
      tweet :"",
    }
  })
  

  const loginHandleSubmit = (data) => {
    sendTweets({endpoint:"/api/tweets/newtweet",reqType:REQ_TYPES.POST,payload:data})
    console.log('data',data) 
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