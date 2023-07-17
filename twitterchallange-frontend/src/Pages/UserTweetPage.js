//Outsource JS library
import React,{useContext,useEffect,useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


//Internal JS
import SingleTweetPage from '../components/UserTweetsPage/SingleTweetPage';




function HomePage() {
  const navigate= useNavigate();
  
   
 
    
  return (
      <section id='homePageContainer'>
          <section id="homePageleftNavBar">
              {/* <h2>{userWelcome}</h2> */}
              <nav id="homePageleftNavBarMainBtns">
                <button id='homePageleftNavBarBtn' onClick={()=>{navigate('/home')}}>Anasayfa</button>
                <button id='homePageleftNavBarBtn'onClick={()=>{}}>Profil</button>
              </nav>
              <nav id="homePageleftNavBarPersonalBtns">
                <button id='homePageleftNavBarBtn'>Ayarlar</button>
                <button id='logoutBtn'  onClick={()=>{}}>Çıkış</button>
              </nav>
          </section>
          <section id="userPageMainSection">
                <SingleTweetPage/>
          </section>
      </section>
  )
}

export default HomePage