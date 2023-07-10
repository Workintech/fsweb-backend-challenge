import { Route,Routes } from 'react-router-dom';


//Component Imports
import MainPage from './Pages/MainPage';
import EntryPage from './Pages/EntryPage';


//CSS Imports
import './scss/style.css'

function App() {


  return (
    <>
      <EntryPage/>
      <Routes>
        <Route path='/mainpage' element={ <MainPage/>}/>
     </Routes>
    </>
  )
}

export default App;
