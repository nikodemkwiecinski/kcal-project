import React, { useState } from 'react';

import { ActiveUser, UserStoreContext } from '../../UserStore/UserStore';
import {ActionTypes, UserAction, UserInfo} from "../../UserStore/UserTypes"

const TrackPanel: React.FC = () => {

  const [steps, setSteps] = useState<number>(0);
  const [water, setWater] = useState<number>(0);

  return (
    <form className='shadow text-dark-blue rounded border-2 w-2/5 p-4 border-extra-light-blue border-solid 2xl:overflow-auto lg:overflow-y-scroll'>
      <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>Water and steps</h2>
      <label htmlFor="" className='block text-center font-bold mt-2'>
        Daily amount of steps
        <input type="number" name="" id="" value={steps} onChange={event => setSteps(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="" className='block text-center font-bold mt-2'>
        Daily amount of water
        <input type="number" name="" id="" value={water} onChange={event => setWater(parseInt(event.target.value))}/>
      </label>
      <label htmlFor="" className='block text-center font-bold mt-2'>
        <input type="submit" value="Submit" className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer'/>
      </label>
    </form>
  )
}

export default TrackPanel;