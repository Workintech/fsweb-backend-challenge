//Outsource JS library
import React,{useContext,useEffect,useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

//Internal JS
import HomePageFirstPage from '../components/HomePage/HomePageFirstPage'
import { HomePageNavContext } from '../context/HomePageNavContext';
import { AuthContext } from '../context/AuthContext';



function HomePage() {
  const navigate= useNavigate();
  const {homePageCount,setHomePageCount} = useContext(HomePageNavContext)
  const {loginData,logOut} = useContext(AuthContext);
  const [userWelcome,setUserWelcome]=useState('Hoşgeldin '+ loginData.name)
 useEffect(()=>{
  setTimeout(() => {
    setUserWelcome(loginData.name)
  }, 3000);
 },[loginData])  
 
    
  return (
      <section id='homePageContainer'>
          <section id="homePageleftNavBar">
              <h2>{userWelcome}</h2>
              <nav id="homePageleftNavBarMainBtns">
                <button id='homePageleftNavBarBtn' onClick={()=>{navigate("/home");setHomePageCount(true)}}>Anasayfa</button>
                <button id='homePageleftNavBarBtn'onClick={()=>{navigate("/home/b");setHomePageCount(false)}}>Profil</button>
                <button id='homePageleftNavBarBtn'onClick={()=>{navigate("/home/c");setHomePageCount(false)}}>Tweet At</button>
              </nav>
              <nav id="homePageleftNavBarPersonalBtns">
                <button id='homePageleftNavBarBtn'>Ayarlar</button>
                <button id='logoutBtn'  onClick={()=>{logOut();navigate("/")}}>Çıkış</button>
              </nav>
          </section>
          <section id="homePageMainSection">
              <section id="homePageMainSectionInputSection">
                <div id="homePageMainSectionInputWrapper">
                <i id='homePageMainSectionInputWrapperFaFa' className="fa-solid fa-magnifying-glass fa-xl"></i>
                  <input 
                    id='homePageMainSectionInput'
                    data-cy="homePageMainSectionInput"
                    type="text"
                    placeholder="Arama"
                  >
                  </input>
                </div>
              </section>
              <section id="homePageMainSectionDataSection">
               {homePageCount?<HomePageFirstPage/>:<Outlet/>}  
              </section>
          </section>
      </section>
  )
}

export default HomePage