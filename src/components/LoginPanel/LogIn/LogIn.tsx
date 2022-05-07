import React, { useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom'

import { UserStoreContext } from '../../UserStore/UserStore';

interface Props{
  setIsUserLoged: React.Dispatch<React.SetStateAction<boolean>>,
  setBlurToogle: React.Dispatch<React.SetStateAction<boolean>>
}

const LogIn: React.FC<Props> = ({setIsUserLoged, setBlurToogle}) => {

  const [userName, setUserName] = useState<string>('');
  const [password, setPasswrod] = useState<string>('');
  const [invalidUser, setInvalidUser] = useState<boolean>(false);

  let navigate = useNavigate();

  const users = useContext(UserStoreContext);

  const handleInput:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {name, value} = event.target
    if(name === 'username'){
      setUserName(value);
    }else if(name === 'password'){
      setPasswrod(value);
    }
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    
    let validateUser: boolean = false;
    
    users?.users.forEach(elem => {
      if(elem.login === userName && elem.password === password){
        validateUser = true;
      }
    })

    setUserName('');
    setPasswrod('');

    if(validateUser){
      setBlurToogle(false);
      setIsUserLoged(true);
      navigate('/meals');
    }else{
      setInvalidUser(true);
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className='text-dark-blue'>
        <label className='block w-3/5 mx-auto text-sm 2xl:mb-5'>
          <p className='font-bold'>Username</p>
          <input type="text" value={userName} name='username' onChange={handleInput} className='block w-full bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
        </label>
        <label className='block w-3/5 mx-auto text-sm 2xl:mb-5'>
          <p className='font-bold'>Password</p>
          <input type="password" value={password} name='password' onChange={handleInput} className='block w-full bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
        </label>
        <input type="submit" value='Submit' className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow '/>
      </form>
      <p className={`text-red-600 ${invalidUser ? 'block' : 'hidden'} font-bold w-1/2 mx-auto mt-5 text-center`}>Username or password is incorrect</p>
    </>
  )
}

export default LogIn;