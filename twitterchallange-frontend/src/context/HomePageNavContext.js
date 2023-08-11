import React, { createContext, useState } from 'react'

export const HomePageNavContext = createContext();

const HomePageProvider = ({children}) =>{
  const [homePageCount,setHomePageCount] =useState(true);
return(
  <HomePageNavContext.Provider value={{homePageCount,setHomePageCount}}>
      {children}
  </HomePageNavContext.Provider>
)
}
export default HomePageProvider