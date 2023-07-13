import { Route,Routes } from 'react-router-dom';
import React from 'react';



//Component Imports
import HomePage from './Pages/HomePage';
import EntryPage from './Pages/EntryPage';
import PrivateRoute from './context/PrivateRoute'
import EntryPageProvider from './context/EntryPageNavContext';
import HomePageFirstPage from './components/Home Page/HomePageFirstPage';
import HomePageSearchPage from './components/Home Page/HomePageSearchPage';

// import Firstpage from './components/EntryPage/Firstpage';
// import Login from './components/EntryPage/Login';
// import RegisterUser from './components/EntryPage/Register';



//CSS Imports
import './scss/style.css'

function App() {

          // <Routes>
          //     <Route path='/' element={ <Firstpage/>}/>   
          //     <Route path='/login' element={ <Login/>}/>  
          //     <Route path='/register' element={ <RegisterUser/>}/>       
          // </Routes>

  return (
    <>
      <Routes>
          <Route path='/' element={
              <EntryPageProvider>
                 <EntryPage/>
              </EntryPageProvider>  
            }/>
          
          <Route path="/home" 
            element={
              <PrivateRoute>
                  <HomePage/>
              </PrivateRoute>
            }
          >
           <Route path="a" element={<HomePageFirstPage/>}/>
           <Route path="b" element={<HomePageSearchPage/>}/>
          </Route>
     </Routes>
    </>
  )
}

export default App;
