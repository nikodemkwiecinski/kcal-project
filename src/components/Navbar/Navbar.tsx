import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import {ICONS, IconProps, USERICONS} from './Icons/Icons'

import ListElement from '../ListElement/ListElement'

interface Props {
  userLoged: boolean
}

const Navbar: React.FC<Props> = ({userLoged}) => {
  
  let location = useLocation();
  
  const icons: Array<IconProps> = [...USERICONS];

  let navIcons: Array<JSX.Element> | null | undefined = userLoged ? icons.map(elem => (
    <ListElement 
      description={elem.description}
      id={elem.id}
      jsx={elem.jsx}
      key={elem.id}
      path={elem.path}  
    >

    </ListElement>
  )) :
  null;

  const logIcon: JSX.Element = !userLoged ? 
    <li key={ICONS[0].id} className="mx-auto mt-8">
      {ICONS[0].jsx}
      <p className="mt-2 font-bold">{ICONS[0].description}</p>
    </li> :
    <li key={ICONS[1].id} className="mx-auto mt-8">
    <Link to={`${ICONS[1].path}`} className="block font-bold">
      {ICONS[1].jsx}
      {ICONS[1].description}
    </Link>
    </li>;

  return (
    <>
      <nav className='flex flex-col bg-light-blue xl:w-64 lg:w-40 h-screen sticky top-0'>
          <ul className='flex flex-col grow text-white xl:text-xl'>
            {logIcon}
            {navIcons}
          </ul>
          <span className='text-white xl:text-4xl lg:text-3xl mb-4'>
            <div className='flex justify-between bottom-4'>
              <FontAwesomeIcon icon={brands('facebook')}  className="xl:ml-16 lg:ml-8"/>
              <FontAwesomeIcon icon={brands('instagram')} className="xl:mr-16 lg:mr-8"/>
            </div>
          </span>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar;