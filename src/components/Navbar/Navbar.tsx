import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import {ICONS, IconProps, USERICONS} from './Icons/Icons'

interface Props {
  icons?: JSX.Element
}

const Navbar: React.FC<Props> = () => {
  const [userLoged, setUserLoged] = useState(false);
  const [activeIcon, setActiveIcon] = useState('');
  
  let icons: Array<IconProps | void> = userLoged ?
  [ICONS[0], ...USERICONS].map(elem => {
    <li>
      <p>{elem.description}</p>
      {elem.jsx}
    </li>
  }):
  [ICONS[1]].map(elem => {
    <li>
      
    </li>
  });

  return (
    <nav>
        <ul>
          {icons}
        </ul>
        <span className='text-white'>
          <FontAwesomeIcon icon={brands('facebook')} />
          <FontAwesomeIcon icon={brands('instagram')}/>
        </span>
    </nav>
  )
}

export default Navbar;