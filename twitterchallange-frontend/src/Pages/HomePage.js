//Outsource JS library
import React,{useContext,useEffect,useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

//Internal JS
import HomePageFirstPage from '../components/HomePage/HomePageFirstPage'
import { HomePageNavContext } from '../context/HomePageNavContext';
import { AuthContext } from '../context/AuthContext';
//import HomePageSearchInput from '../components/HomePage/HomePageSearchInput';
import SendTweetPage from '../components/HomePage/SendTweetPage';
import { DropDownContext } from '../context/DropDownButton';



function HomePage() {
  const navigate= useNavigate();
  const {homePageCount,setHomePageCount} = useContext(HomePageNavContext)
  const {loginData,logOut} = useContext(AuthContext);
  const{dropDown,setDropDown}=useContext(DropDownContext);
  
  const [userWelcome,setUserWelcome]=useState('Welcome '+ loginData.name)
 useEffect(()=>{
  setTimeout(() => {
    setUserWelcome(loginData.name)
  }, 3000);
 },[loginData])  

 
 
    
  return (
      <section id='homePageContainer'onClick={()=>{setDropDown(false)}}>
          <section id="homePageleftNavBar">
              <h2  data-cy="homePageWelcome">{userWelcome}</h2>
              <nav id="homePageleftNavBarMainBtns">
                <button id='homePageleftNavBarBtn' onClick={()=>{navigate("/home");setHomePageCount(true)}}>Home Page</button>
                <button id='homePageleftNavBarBtn'onClick={()=>{navigate("/home/b");setHomePageCount(false)}}>Profile</button>
              </nav>
              <nav id="homePageleftNavBarPersonalBtns">
                <button id='homePageleftNavBarBtn'>Settings</button>
                <button id='logoutBtn'  onClick={()=>{logOut();navigate("/")}}>Logout</button>
              </nav>
          </section>
          <section id="homePageMainSection">
              {/* <HomePageSearchInput/> */}
              <SendTweetPage/>
              <section id="homePageMainSectionDataSection">
               {homePageCount?<HomePageFirstPage/>:<Outlet/>}  
              </section>
          </section>
      </section>
  )
}

export default HomePage