import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import {ICONS, IconProps, USERICONS} from './Icons/Icons'

interface Props {
  icons?: JSX.Element
}

const Navbar: React.FC<Props> = () => {
  const [userLoged, setUserLoged] = useState(false);
  const [activeIcon, setActiveIcon] = useState('');

  const icons: Array<IconProps> = [...USERICONS];

  const navIcons: Array<JSX.Element> | null = userLoged ? icons.map(elem => (
    <li key={elem.id}>
      <Link to={`${elem.path}`}>
        {elem.description}
      </Link>
      {elem.jsx}
    </li>
  )) :
  null;

  const logIcon: JSX.Element = !userLoged ? 
    <li key={ICONS[0].id}>
      {ICONS[0].jsx}
      <p>{ICONS[0].description}</p>
    </li> :
    <li key={ICONS[1].id}>
    {ICONS[1].jsx}
    <Link to={`${ICONS[1].path}`}>{ICONS[1].description}</Link>
    </li>;

  return (
    <>
      <nav>
          <ul>
            {logIcon}
            {navIcons}
          </ul>
          <span className='text-black'>
            <FontAwesomeIcon icon={brands('facebook')} />
            <FontAwesomeIcon icon={brands('instagram')}/>
          </span>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar;