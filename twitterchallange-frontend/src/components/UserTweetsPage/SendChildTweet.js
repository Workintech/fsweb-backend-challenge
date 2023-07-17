//Outsource JS Library
import React,{useContext,useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

//Outsource JS Library
import { AuthContext } from '../../context/AuthContext';
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';


function SendChildTweet() {
    const {tweetid,userid} = useParams();
    const {loginData} = useContext(AuthContext);
    const [sendChildTweets, childTweets, loading, error] = useAxios([]);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({mode:'onChange',
      defaultValues:{
        parent_id:tweetid,
        user_id:loginData.id,
        tweet :""
      }
    })

    const tweetHandleSubmit = (data) => {
      console.log("tweetid",tweetid)
      sendChildTweets({endpoint:"/api/tweets/newtweet",reqType:REQ_TYPES.POST,payload:data})
      console.log("data",data) 
    }

    

  return (
    <section id='sendChildTweetMainContainer'>
    <form id='sendChildTweetForm' onSubmit={handleSubmit(tweetHandleSubmit)}>
        <label id="sendChildTweetLabel">${userid} cevaplanmaktadir...</label>
        <textarea
        id='sendChildTweetInput'
        data-cy="sendChildTweetInputTest"
        type="text"
        placeholder="Cevap ver..."
        maxLength="128"
        {...register("tweet")}
        />
      <div id="sendChildTweetButtonWrapper">
        <button data-cy="sendChildTweetSbmtBtn"type="submit">Tweeti Gönder</button>
      </div>
    </form>
  </section>
  )
}

export default SendChildTweet