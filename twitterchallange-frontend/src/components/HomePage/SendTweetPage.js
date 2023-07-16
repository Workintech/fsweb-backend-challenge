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
      tweet :""
    }
  })
  

  const loginHandleSubmit = (data) => {
    sendTweets({endpoint:"/api/tweets/newtweet",reqType:REQ_TYPES.POST,payload:data})
    setHomePageCount(true);
    navigate('/home')
    console.log('mainSubmit',data)
  }


  return (
    <section id='sendTweetMainContainer'>
      <form id='sendTweetForm' onSubmit={handleSubmit(loginHandleSubmit)}>
          <label id="sendTweetLabel">Tweet Gonderimi...</label>
          <textarea
          id='sendTweetInput'
          data-cy="loginDataName"
          type="text"
          placeholder="Herkes senin tweetini sabırsızlıkla bekliyor...."
          maxLength="128"
          {...register("tweet", { required: "Lütfen kullanıcı adınızı giriniz" })}
          />
        <button data-cy="sendTweetSbmtBtn"type="submit">Tweeti Gönder</button>
      </form>
    </section>
  )
}

export default SendTweetPage