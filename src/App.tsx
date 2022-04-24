import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NoPage from './components/NoPage/NoPage';
import Meals from './components/Meals/Meals';
import Profile from './components/Profile/Profile';

import './style.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='meals' element={<Meals/>}/>
          <Route path='calculator' element={<Calculator/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
 
export default App;