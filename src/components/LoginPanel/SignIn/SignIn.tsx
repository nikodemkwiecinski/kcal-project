import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'

import { ActiveUser, UserStoreContext } from '../../UserStore/UserStore'
import {ActionTypes, UserAction, UserInfo} from '../../UserStore/UserTypes'

interface Props{
  setBlurToogle: React.Dispatch<React.SetStateAction<boolean>>,
  setIsUserLoged: React.Dispatch<React.SetStateAction<boolean>>
}

const SignIn: React.FC<Props> = ({setIsUserLoged, setBlurToogle}) => {

  const [userName, setUserName] = useState<string>('');
  const [password, setPasswrod] = useState<string>('');
  const [repeatPassword, setReapeatPasswrod] = useState<string>('');
  const [invalidUser, setInvalidUser] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  let navigate = useNavigate();

  const users = useContext(UserStoreContext);
  const activeUser = useContext(ActiveUser);

  const handleInput:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {name, value} = event.target
    if(name === 'username'){
      setUserName(value);
    }else if(name === 'password'){
      setPasswrod(value);
    }else if(name === 'password2'){
      setReapeatPasswrod(value);
    }
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    let validUserName: boolean = true;
    let id:number = users?.users[users.users.length - 1].id as number + 1;

    users?.users.forEach(elem => {
      if(elem.login === userName || userName === ''){
        validUserName = false;
        setErrorMessage('Username already used or empty');
        setUserName('');
        setInvalidUser(true);
      }
    })

    const newUser: UserAction = {
      payload: {
        id,
        login: userName,
        password
      },
      type: ActionTypes.ADD
    }

    if(password === repeatPassword && validUserName && (password !== '' || repeatPassword !== '')){
      users?.dispatch(newUser);
      activeUser?.setActiveUser(id);
      setBlurToogle(false);
      setIsUserLoged(true);
      navigate('/meals');
    }else if(password === '' || repeatPassword === ''){
      setErrorMessage("Password is empty");
      setInvalidUser(true);
      setPasswrod('');
      setReapeatPasswrod('');
    }else if(password !== repeatPassword){
      setErrorMessage("Passwords doesn't match");
      setInvalidUser(true);
      setPasswrod('');
      setReapeatPasswrod('');
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
        <label className='block w-3/5 mx-auto text-sm 2xl:mb-5'>
          <p className='font-bold'>Reapeat Password</p>
          <input type="password" value={repeatPassword} name='password2' onChange={handleInput} className='block w-full bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
        </label>
        <input type="submit" value='Submit' className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer'/>
      </form>
      <p className={`text-red-600 ${invalidUser ? 'block' : 'hidden'} font-bold w-1/2 mx-auto mt-5 text-center`}>{errorMessage}</p>
    </>
  )
}

export default SignIn;