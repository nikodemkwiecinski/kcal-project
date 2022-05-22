import React, {useContext , useState} from 'react';

import { ActiveUser, UserStoreContext } from '../../UserStore/UserStore';
import {ActionTypes, UserAction, UserInfo} from "../../UserStore/UserTypes"

import './PersonalData.css'

interface Props{

}

const ACTIVITY_KINDS = {
  'low':1.2,
  'low/medium':1.35,
  'medium':1.5,
  'medium/high':1.65,
  'high':1.8
}  

const PersonalData: React.FC<Props> = () => {

  const [weight, setWeight] = useState<number>(0);
  const [activity, setActivity] = useState<string>("low");
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [isActive, setIsAvtive] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const activeUser = useContext(ActiveUser);
  const users = useContext(UserStoreContext);
  const currentUser = users?.users.find(elem => elem.id === activeUser?.activeUser);

  const dataSaved = isActive ? <p className='mt-4 text-center font-bold'>Data saved</p> : null;
  const errorMessage = isWrong ? <p className='mt-4 text-center font-bold text-red-700'>All values have to be positive</p> : null;

  const handleDataSaved = () => {
    setIsAvtive(false);
  }

  const handleError = () => {
    setIsWrong(false);
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();


    if(weight > 1 && age > 1 && height > 1){
      const {id, login, password} = currentUser as UserInfo;

      type AccesKey = keyof typeof ACTIVITY_KINDS;
      const userActivity = `${activity}` as AccesKey

      const editedUser: UserAction = {
        payload: {
          ...currentUser,
          id,
          login,
          password,
          age: age,
          height: height,
          weight: weight,
          activity: ACTIVITY_KINDS[userActivity]
        },
        type: ActionTypes.EDIT
      }

      users?.dispatch(editedUser);
      setIsAvtive(true);
      setTimeout(handleDataSaved, 3000);
    }else{
      setIsWrong(true);
      setTimeout(handleError, 3000);
    } 
  }

  return (
    <form onSubmit={handleSubmit} className='shadow text-dark-blue rounded border-2 w-2/5 p-4 border-extra-light-blue border-solid 2xl:overflow-auto lg:overflow-y-scroll'>
      <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>Personal Data</h2>
      <label className='text-center font-bold mt-2'>
        Weight
        <input type="number" id='weight' value={weight} onChange={event => setWeight(parseInt(event.target.value))} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label className='text-center font-bold mt-2'>
        Age
        <input type="number" id="age" value={age} onChange={event => setAge(parseInt(event.target.value))} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label className='text-center font-bold mt-2'>
        Height
        <input type="number" id="height" value={height} onChange={event => setHeight(parseInt(event.target.value))} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label className='text-center font-bold mt-2'>
        Daily activity
        <select id="activity" value={activity} onChange={event => setActivity(event.target.value)} className='block w-2/4 mx-auto border border-solid border-dark-blue rounded mt-2'>
          <option value="low">Low</option>
          <option value="low/medium">Low/Medium</option>
          <option value="medium">Medium</option>
          <option value="medium/high">Medium/High</option>
          <option value="high">High</option>
        </select>
      </label>
      <label className='text-center font-bold'>
        <input type="submit" value="Submit" className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer' />
      </label>
      {dataSaved}
      {errorMessage}
    </form>
  )
} 

export default PersonalData;