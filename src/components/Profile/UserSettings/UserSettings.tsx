import React, { useContext, useState } from 'react';

import { ActiveUser, UserStoreContext } from '../../UserStore/UserStore';
import {ActionTypes, UserAction, UserInfo} from "../../UserStore/UserTypes"

const UserSettings: React.FC = () => {
  
  const [username, setUsername] = useState<string>("");
  const [newPassword, setPassword] = useState<string>("");
  const [isActive, setIsAvtive] = useState<boolean>(false);

  const activeUser = useContext(ActiveUser);
  const users = useContext(UserStoreContext);
  const currentUser = users?.users.find(elem => elem.id === activeUser?.activeUser);

  const dataSaved = isActive ? <p className='mt-4 text-center font-bold'>Data saved</p> : null;

  const handleDataSaved = () => {
    setIsAvtive(false);
  }

  const handleUsernameChange = () => {

    const {id, password} = currentUser as UserInfo;

    const editedUser: UserAction = {
      payload: {
        ...currentUser,
        id,
        login: username,
        password
      },
      type: ActionTypes.EDIT
    }

    users?.dispatch(editedUser);
    setIsAvtive(true);
    setTimeout(handleDataSaved, 3000);
  }

  const handlePasswordChange = () => {

    const {id, login} = currentUser as UserInfo;

    const editedUser: UserAction = {
      payload: {
        ...currentUser,
        id,
        login,
        password: newPassword
      },
      type: ActionTypes.EDIT
    }

    users?.dispatch(editedUser);
    setIsAvtive(true);
    setTimeout(handleDataSaved, 3000);
  }

  return(
    <form onSubmit={event => event.preventDefault()} className='shadow text-dark-blue rounded border-2 w-2/5 p-4 border-extra-light-blue border-solid 2xl:overflow-auto  lg:overflow-y-scroll'>
      <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>User Settings</h2>
      <label className='text-center font-bold mt-6 block'>
        Change Username
        <input type="text" id='username' value={username} onChange={event => setUsername(event.target.value)} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label className='text-center font-bold block'>
        <button onClick={handleUsernameChange} className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer' >Submit</button>
      </label>
      <label className='text-center font-bold mt-6 block'>
        Change Password:
        <input type="password" id='pass' value={newPassword} onChange={event => setPassword(event.target.value)} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label className='text-center font-bold block'>
        <button onClick={handlePasswordChange} className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer' >Submit</button>
      </label>
      {dataSaved}
    </form>
  )
}

export default UserSettings;