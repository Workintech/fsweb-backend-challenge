import { Route,Routes } from 'react-router-dom';
import React from 'react';



//Component Imports
import HomePage from './Pages/HomePage';
import EntryPage from './Pages/EntryPage';
import PrivateRoute from './context/PrivateRoute'
import EntryPageProvider from './context/EntryPageNavContext';
import HomePageSearchPage from './components/Home Page/HomePageSearchPage';
import SendTweetPage from './components/Home Page/SendTweetPage';
import HomePageProvider from './context/HomePageNavContext';



//CSS Imports
import './scss/style.css'

function App() {

          // <Routes>
          //     <Route path='/' element={ <Firstpage/>}/>   
          //     <Route path='/login' element={ <Login/>}/>  
          //     <Route path='/register' element={ <RegisterUser/>}/>       
          // </Routes>

  return (
    <div id='appContainer'>
      <Routes>
          <Route path='/' element={
              <EntryPageProvider>
                 <EntryPage/>
              </EntryPageProvider>  
            }/>
          
          <Route path="/home" 
            element={
              <PrivateRoute>
                <HomePageProvider>
                  <HomePage/>
                </HomePageProvider>
              </PrivateRoute>
            }
          >
           <Route path="b" element={<HomePageSearchPage/>}/>
           <Route path="c" element={<SendTweetPage/>}/>
          </Route>
     </Routes>
    </div>
  )
}

export default App;
