import React,{useContext} from 'react'


import { EntryPageNavContext } from '../context/EntryPageNavContext';
import Firstpage from '../components/EntryPage/Firstpage';
import Login from '../components/EntryPage/Login';
import RegisterUser from '../components/EntryPage/Register';


function EntryPage() {

  const {entryPageNum} = useContext(EntryPageNavContext)

  //console.log("entryPageNum",entryPageNum)

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
          <a id='footerLink' href="mailto:serkantrmn85@gmail.com">Contact to Developer </a> 
          <a id='footerLink' href='https://serkan-toraman.vercel.app/' target="_blank" rel="noopener noreferrer">Developer Website </a> 
        </nav>
      </footer>
    </>
  )
}

export default EntryPage