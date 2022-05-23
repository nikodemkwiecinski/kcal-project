import React, { useContext, useState } from 'react';

import { ActiveUser, UserStoreContext } from '../../UserStore/UserStore';
import {ActionTypes, UserAction, UserInfo} from "../../UserStore/UserTypes"

const TrackPanel: React.FC = () => {

  const [steps, setSteps] = useState<number>(5000);
  const [water, setWater] = useState<number>(2500);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const activeUser = useContext(ActiveUser);
  const users = useContext(UserStoreContext);
  const currentUser = users?.users.find(elem => elem.id === activeUser?.activeUser);

  const errorMessage = isWrong ? <p className='mt-4 text-center font-bold text-red-700'>All values must be positive</p> : null;
  const dataSavedMessage = isCorrect ? <p className='mt-4 text-center font-bold'>Data saved</p> : null;

  const handleDataSaved = () => {
    setIsCorrect(false);
  }

  const handleError = () => {
    setIsWrong(false);
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if(steps > 1 && water > 1){
      const {id, login, password} = currentUser as UserInfo;

      const editedUser: UserAction = {
       payload: { ...currentUser,
        id,
        login,
        password,
        steps,
        water 
       },
       type: ActionTypes.EDIT
      }
      users?.dispatch(editedUser);
      setIsCorrect(true);
      setTimeout(handleDataSaved, 3000);
    }else{
      setIsWrong(true);
      setTimeout(handleError, 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='shadow text-dark-blue rounded border-2 w-2/5 p-4 border-extra-light-blue border-solid 2xl:overflow-auto lg:overflow-y-scroll'>
      <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>Water and steps</h2>
      <label htmlFor="" className='block text-center font-bold mt-2'>
        Daily amount of steps
        <input type="number" name="" id="" value={steps} onChange={event => setSteps(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="" className='block text-center font-bold mt-2'>
        Daily amount of water (ml)
        <input type="number" name="" id="" value={water} onChange={event => setWater(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="" className='block text-center font-bold mt-2'>
        <input type="submit" value="Submit" className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer'/>
      </label>
      {errorMessage}
      {dataSavedMessage}
    </form>
  )
}

export default TrackPanel;