import React,{useContext,useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

function HomePage() {
  const navigate= useNavigate();
  const {logOut} = useContext(AuthContext);

  // useEffect(()=>{
  //   if(isLoggedIn){
  //     navigate('/')
  //   }
  // },[isLoggedIn])
 

  return (
      <section id='homePageContainer'>
          <section id="homePageleftNavBar">
              <h2>Hoşgeldin</h2>
              <nav id="homePageleftNavBarMainBtns">
                <button id='homePageleftNavBarBtn' onClick={()=>{navigate("/home/a")}}>Anasayfa</button>
                <button id='homePageleftNavBarBtn'onClick={()=>{navigate("/home/b")}}>Profil</button>
                <button id='homePageleftNavBarBtn'onClick={()=>{navigate("/home/c")}}>Tweet At</button>
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
                <Outlet/>
              </section>
          </section>
      </section>
  )
}

export default HomePage