import React, { useState, useEffect,useContext } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { EntryPageNavContext } from '../../context/EntryPageNavContext';

function RegisterUser() {
  const {setEntryPageNum} = useContext(EntryPageNavContext)
  const [registerErrorReponse,setRegisterErrorReponse]=useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:'onChange'
})
const registerHandleSubmit=(data)=>{
  axios
  .post(
    "http://localhost:9000/api/auth/register",data
  )
  .then((res) => {
    console.log("Yeni urun kayıt res > ", res.data);  
    setEntryPageNum(1)
  })
  .catch((err)=>{
    setRegisterErrorReponse(err.response.data.message)
  })
}
  useEffect(()=>{
    setTimeout(() => {
      setRegisterErrorReponse("")
    }, 2000);
  },[registerErrorReponse])


  return (
    <section id="firstPageLoginMainContainer">
      <button id="loginExitIcon" onClick={()=>{
        setEntryPageNum(0)
      }}><i className="fa-sharp fa-regular fa-circle-xmark fa-4x"></i></button>
      
      <form id='entryPageForm' onSubmit={handleSubmit(registerHandleSubmit)} >
        <h2>Kayit</h2>
        <label htmlFor="title "> İsim</label>
        <input
        data-cy="registerDataName"
        type="text"
        placeholder="İsim"
        {...register("name", { required: "Lütfen isminizi giriniz" })}
        />
        {errors?.name && <p id="formError">{errors.name.message}</p>}
        <label htmlFor="title "> Kullanıcı Adı</label>
        <input
        data-cy="registerUserName"
        type="text"
        placeholder="Kullanıcı adı"
        {...register("userName", { required: "Lütfen kullanıcı adınızı giriniz" })}
        />
        {errors?.userName && <p id="formError">{errors.userName.message}</p>}
        <label htmlFor="title "> E-mail</label>
        <input
        data-cy="registerUserEmail"
        type="text"
        placeholder="E-mail"
        {...register("userEmail", { required: "Lütfen e-mail adresinizi giriniz" })}
        />
        {errors?.userEmail && <p id="formError">{errors.userEmail.message}</p>}
        <label htmlFor="title "> Şifre </label>
        <input
        data-cy="registerPassword"
        type="text"
        placeholder="Password"
        {...register("password", { required: "Lütfen şifre giriniz"})}
        />
        {errors?.password && <p id="formError">{errors.password.message}</p>}
        
        <button data-cy="registerSbmtBtn" type="submit">Kayıt</button>
        {registerErrorReponse&&<p id="axiosError">{registerErrorReponse}</p>}
      </form>
    </section>
  )
}

export default RegisterUser