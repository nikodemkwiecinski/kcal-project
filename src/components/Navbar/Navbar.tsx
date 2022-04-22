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

  const icons: Array<IconProps> = userLoged ? [ICONS[1], ...USERICONS] : [ICONS[0]];

  const navIcons = icons.map(elem => (
    <li key={elem.id}>
      <p>
        {elem.description}
      </p>
      {elem.jsx}
    </li>
  ))

  return (
    <nav>
        <ul>
          {navIcons}
        </ul>
        <span className='text-white'>
          <FontAwesomeIcon icon={brands('facebook')} />
          <FontAwesomeIcon icon={brands('instagram')}/>
        </span>
    </nav>
  )
}

export default Navbar;