import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import {ICONS, IconProps, USERICONS} from './Icons/Icons'

import ListElement from '../ListElement/ListElement'

export interface Props {
  blurToogle: boolean
  userLoged: boolean
  setBlurToogle: React.Dispatch<React.SetStateAction<boolean>>
  setIsUserLoged: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<Props> = ({userLoged, setIsUserLoged, blurToogle, setBlurToogle}) => {
  
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
    <li key={ICONS[0].id} className="mx-auto mt-8 cursor-pointer" onClick={() => setBlurToogle(prevState => !prevState)}>
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
      <nav className={`flex flex-col bg-light-blue 2xl:w-64 xl:w-40 lg:w-32 h-screen sticky top-0 ${blurToogle ? 'blur-sm' : ''}`}>
          <ul className='flex flex-col grow text-white 2xl:text-xl xl:text-lg lg:text-md'>
            {logIcon}
            {navIcons}
          </ul>
          <span className='text-white 2xl:text-4xl xl:text-2xl lg:text-xl mb-4'>
            <div className='flex justify-between bottom-4'>
              <FontAwesomeIcon icon={brands('facebook')}  className="2xl:ml-16 xl:ml-8 lg:ml-4"/>
              <FontAwesomeIcon icon={brands('instagram')} className="2xl:mr-16 xl:mr-8 lg:mr-4"/>
            </div>
          </span>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar;