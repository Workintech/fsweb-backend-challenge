import React,{useContext} from 'react'


import { EntryPageNavContext } from '../../context/EntryPageNavContext';

function Firstpage() {
  const {setEntryPageNum} = useContext(EntryPageNavContext)

  return (
      <nav id="firstPageMainContainer">
         <h1>Welcome</h1>
          <button data-cy="entryPageGirisBtn" onClick={()=>{
        setEntryPageNum(1)
      }}>Login</button>
          <button data-cy="entryPageKayitBtn" onClick={()=>{
        setEntryPageNum(2)
      }}>Register</button>
      </nav>  
  )
}

export default Firstpage