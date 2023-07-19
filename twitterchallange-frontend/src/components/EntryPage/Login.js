//Outsource JS Library
import React,{useContext,useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
//Internal JS
import { AuthContext } from '../../context/AuthContext';
import { EntryPageNavContext } from '../../context/EntryPageNavContext';


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
  loginHandleSubmitContext(data);   
}
useEffect(()=>{
  if(isLoggedIn){
    navigate('/home')
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
        <h2 dt-cy="loginFormH2">Login</h2>
        <label htmlFor="title "> Name</label>
        <input
        data-cy="loginDataName"
        type="text"
        placeholder="Username"
        {...register("loginDataName", { required: "Please enter your username" })}
        />
        {errors?.loginDataName && <p id="formError">{errors.loginDataName.message}</p>}
        <label htmlFor="title "> Password</label>
        <input
        data-cy="loginPassword"
        type="text"
        placeholder="Password"
        {...register("password", { required: "Please enter your password" })}
        />
        {errors?.password && <p id="formError">{errors.password.message}</p>}
        <button data-cy="loginSbmtBtn"type="submit">Submit</button>
        {errorReponse&&<p id="axiosError">{errorReponse}</p>}
      </form>
    </section>
  )
}

export default Login