import React, { useContext, useState  } from 'react';

import { ActiveUser, UserStoreContext } from '../../UserStore/UserStore';
import {ActionTypes, UserAction, UserInfo} from "../../UserStore/UserTypes"

import './MacroPanel.css'

const MacroPanel: React.FC = () => {

  const [calories, setCalories] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);

  const activeUser = useContext(ActiveUser);
  const users = useContext(UserStoreContext);
  const currentUser = users?.users.find(elem => elem.id === activeUser?.activeUser);

  return (
    <form onSubmit={event => event.preventDefault()} className='shadow text-dark-blue rounded border-2 w-2/5 p-4 border-extra-light-blue border-solid 2xl:overflow-auto lg:overflow-y-scroll'>
      <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>Estimate your daily macros automatically</h2>
      <label>
        <button className='bg-green-500 mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-2 text-white font-bold rounded shadow cursor-pointer'>Estimate</button>
      </label>
      <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>Input macros by yourself</h2>
      <label htmlFor="">
        Daily calories
        <input type="number" name="" id="" value={calories} onChange={event => setCalories(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="">
        Protein
        <input type="number" name='' id='' value={protein} onChange={event => setProtein(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="">
        Fats
        <input type="number" name='' id='' value={fat} onChange={event => setFat(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="">
        Carbs
        <input type="number" name='' id='' value={carbs} onChange={event => setCarbs(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="">
        <input type="submit" value="Submit" className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer'/>
      </label>
    </form>
  )
}

export default MacroPanel;