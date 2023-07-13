import React,{useContext} from 'react'


import { EntryPageNavContext } from '../../context/EntryPageNavContext';

function Firstpage() {
  const {setEntryPageNum} = useContext(EntryPageNavContext)

  return (
      <nav id="firstPageMainContainer">
         <h1>Hoşgeldiniz</h1>
          <button data-cy="entryPageGirisBtn" onClick={()=>{
        setEntryPageNum(1)
      }}>Giriş</button>
          <button data-cy="entryPageKayitBtn" onClick={()=>{
        setEntryPageNum(2)
      }}>Kayıt</button>
      </nav>  
  )
}

export default Firstpage