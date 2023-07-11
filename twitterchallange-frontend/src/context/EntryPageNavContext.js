import React, { createContext, useState } from 'react'

export const EntryPageNavContext = createContext();

const EntryPageProvider = ({children}) =>{

  const [entryPageNum,setEntryPageNum] = useState(0);
return(
  <EntryPageNavContext.Provider value={{entryPageNum,setEntryPageNum}}>
      {children}
  </EntryPageNavContext.Provider>
)
}
export default EntryPageProvider