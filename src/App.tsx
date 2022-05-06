import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';
import LoginPanel from './components/LoginPanel/LoginPanel';
import Navbar from './components/Navbar/Navbar';
import NoPage from './components/NoPage/NoPage';
import Meals from './components/Meals/Meals';
import Profile from './components/Profile/Profile';

import './style.css'

export interface BlurProps{
  blurToogle: boolean
}

const App: React.FC = () => {

  const [isUserLoged, setIsUserLoged] = useState<boolean>(false);
  const [blurToogle, setBlurToogle] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Navbar 
            userLoged={isUserLoged} 
            setIsUserLoged={setIsUserLoged}
            blurToogle={blurToogle}
            setBlurToogle={setBlurToogle}
        />}>
          <Route index element={<Home blurToogle={blurToogle}/>}/>
          <Route path='meals' element={<Meals />}/>
          <Route path='calculator' element={<Calculator/>}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
 
export default App;