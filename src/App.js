import {BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import './App.css';



// ================   pages ===================\\


import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Offers from './pages/Offers';

//---------------------------------------------\\

function App() {
  return (
      <>


    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/offers' element={<Offers/>}/>
        </Routes>
    </BrowserRouter>
     
      
      </>
  );
}

export default App;
