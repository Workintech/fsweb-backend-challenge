import React,{useContext} from 'react'
import { Outlet, Route,Routes } from 'react-router-dom';


import { EntryPageNavContext } from '../context/EntryPageNavContext';
import Firstpage from '../components/EntryPage/Firstpage';
import Login from '../components/EntryPage/Login';
import RegisterUser from '../components/EntryPage/Register';


function EntryPage() {

  const {entryPageNum} = useContext(EntryPageNavContext)

  console.log("entryPageNum",entryPageNum)

  return (
    <>
      <section id="entryPageMainContainer"> 
        <section id='entryPageMainLeftContainer'>Twitter</section>
        <section id='entryPageMainRightContainer'>
          {entryPageNum===1?<Login/>:(entryPageNum===2?<RegisterUser/>:<Firstpage/>)}
        </section>
      </section>
      <footer id='entryPageFooter'> 
        <nav>
          <a id='footerLink' href="mailto:serkantrmn85@gmail.com">Yazılımcı ile iletişime geç </a> 
          <a id='footerLink' href='https://serkan-toraman.vercel.app/' target="_blank" rel="noopener noreferrer">Yazılımcı Websitesi </a> 
        </nav>
      </footer>
    </>
  )
}

export default EntryPage