import React, { useState } from 'react';

const LogIn: React.FC = () => {

  const [userName, setUserName] = useState<string>('');
  const [password, setPasswrod] = useState<string>('');

  const handleInput:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {name, value} = event.target
    if(name === 'username'){
      setUserName(value);
    }else if(name === 'password'){
      setPasswrod(value);
    }
  }

  return (
    <form action="" className='text-dark-blue text-bold'>
      <label className='block w-3/5 mx-auto text-sm'>
        <p>Username</p>
        <input type="text" value={userName} name='username' onChange={handleInput} className='block w-full bg-extra-light-blue rounded shadow'/>
      </label>
      <label className='block w-3/5 mx-auto text-sm'>
        <p>Password</p>
        <input type="password" value={password} name='password' onChange={handleInput} className='block w-full bg-extra-light-blue rounded shadow'/>
      </label>
      <input type="submit" value='Submit' className='block bg-dark-blue mx-auto h-8 w-24 mt-8 text-white font-bold rounded shadow'/>
    </form>
  )
}

export default LogIn;