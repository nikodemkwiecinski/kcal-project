import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'

import {IconProps} from '../Navbar/Icons/Icons'

const ListElement: React.FC<IconProps> =  ({description, id, jsx, path}) => {

  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(path === location.pathname){
      setIsActive(prevState => !prevState)
    }else{
      setIsActive(false)
    }
  },[location])

  return (
    <li className={`mx-auto 2xl:mt-16 lg:mt-12 cursor-pointer ${isActive ? 'active' : ''}`} >
      <Link to={`${path}`} className="block font-bold">
        {description}
        {jsx}
      </Link>
    </li>
  )
}

export default ListElement;