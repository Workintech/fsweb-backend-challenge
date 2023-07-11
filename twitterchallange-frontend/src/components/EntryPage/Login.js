import React,{useContext,useEffect} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { EntryPageNavContext } from '../../context/EntryPageNavContext';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate =useNavigate();
  const {loginHandleSubmitContext,isLoggedIn,errorReponse,setErrorResponse} = useContext(AuthContext);
  const {setEntryPageNum} = useContext(EntryPageNavContext)
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:'onChange'
})

const loginHandleSubmit = (data) => {
  console.log('data',data)
  loginHandleSubmitContext(data);   
}
useEffect(()=>{
  if(isLoggedIn){
    navigate('/mainpage')
  }
},[isLoggedIn])

useEffect(()=>{
  setTimeout(() => {
    setErrorResponse("")
  }, 2000);
},[errorReponse])

  return (
    <section id="firstPageLoginMainContainer">
      <button id="loginExitIcon" onClick={()=>{
        setEntryPageNum(0)
      }}><i className="fa-sharp fa-regular fa-circle-xmark fa-4x"></i></button>
      <form id='entryPageForm' onSubmit={handleSubmit(loginHandleSubmit)} >
        <h2 dt-cy="loginFormH2">Giriş</h2>
        <label htmlFor="title "> İsim</label>
        <input
        data-cy="loginDataName"
        type="text"
        placeholder="İsim"
        {...register("loginDataName", { required: "Lütfen kullanıcı adınızı giriniz" })}
        />
        {errors?.loginDataName && <p id="formError">{errors.loginDataName.message}</p>}
        <label htmlFor="title "> Şifre</label>
        <input
        data-cy="loginPassword"
        type="text"
        placeholder="Şifre"
        {...register("password", { required: "Lütfen kullanıcı şifre giriniz" })}
        />
        {errors?.password && <p id="formError">{errors.password.message}</p>}
        <button data-cy="loginSbmtBtn"type="submit">Giriş</button>
        {errorReponse&&<p id="axiosError">{errorReponse}</p>}
      </form>
    </section>
  )
}

export default Login