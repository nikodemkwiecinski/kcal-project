import React from 'react';

import './style.css'

import Navbar from './components/Navbar/Navbar'
import UserStore from './components/UserStore/UserStore';

const App: React.FC = () => {
  return (
    <UserStore>
      <Navbar></Navbar>
    </UserStore>
  )
}
 
export default App;