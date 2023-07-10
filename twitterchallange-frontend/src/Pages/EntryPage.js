import React from 'react'
import { Route,Routes } from 'react-router-dom';

import Firstpage from '../components/Firstpage';
import Login from '../components/Login';
import RegisterUser from '../components/Register';


function EntryPage() {
  return (
    <>
      <section id="entryPageMainContainer"> 
        <section id='entryPageMainLeftContainer'>Twitter</section>
        <section id='entryPageMainRightContainer'>
          <Routes>
              <Route path='/' element={ <Firstpage/>}/>   
              <Route path='/login' element={ <Login/>}/>  
              <Route path='/register' element={ <RegisterUser/>}/>       
          </Routes>
        </section>
      </section>
      <footer id='entryPageFooter'> 
        <nav>
          <a id='footerLink' href='https://serkan-toraman.vercel.app/'>Yazılımcı ile iletişime geç </a> 
          <a id='footerLink' href='https://serkan-toraman.vercel.app/'>Yazılımcı Websitesi </a> 
        </nav>
      </footer>
    </>
  )
}

export default EntryPage