import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';




function Login() {
  const navigate =useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:'onChange'
})
const loginHandleSubmit=(data)=>{
  axios
  .post(
    "http://localhost:9000/api/auth/login",data,{withCredentials: true, credentials: 'include'}

  )
  .then((res) => {
    console.log("Yeni urun kayıt res > ", res.data);  
    navigate("/peoplelist");
  })
  .catch((err)=>{
    navigate("/");
    alert("eksik bilgi")
  })
}
  return (
    <section id="firstPageLoginMainContainer">
      <button id="loginExitIcon" onClick={()=>{
        navigate('/')
      }}><i className="fa-sharp fa-regular fa-circle-xmark fa-4x"></i></button>
      <form id='entryPageForm' onSubmit={handleSubmit(loginHandleSubmit)} >
        <label htmlFor="title "> İsim</label>
        <input
        type="text"
        placeholder="İsim"
        {...register("username", { required: "Lütfen kullanıcı adınızı giriniz" })}
        />
        {errors?.username && <p>{errors.username.message}</p>}
        <label htmlFor="title "> Şifre</label>
        <input
        type="text"
        placeholder="Şifre"
        {...register("password", { required: "Lütfen kullanıcı şifre giriniz" })}
        />
        {errors?.password && <p>{errors.password.message}</p>}
        <button type="submit">Giriş</button>
      </form>
    </section>
  )
}

export default Login