import React, {useContext , useState} from 'react';

import { ActiveUser, UserStoreContext } from '../../UserStore/UserStore';
import {ActionTypes, UserAction} from "../../UserStore/UserTypes"

import './PersonalData.css'

interface Props{

}

const PersonalData: React.FC<Props> = () => {

  const [weight, setWeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [waterConsumption, setWaterConsumption] = useState<number>(0);
  const [steps, setSteps] = useState<number>(0);

  const users = useContext(UserStoreContext);
  const activeUser = useContext(ActiveUser);

  return (
    <form className='shadow rounded border w-2/5 p-3 border-dark-blue border-solid'>
      <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>Personal Data</h2>
      <label>
        <input type="text" id='weight' value={weight} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label>
        <select className='block w-2/4 mx-auto'>
          <option selected value="low">Low</option>
          <option value="low/medium">Low/Medium</option>
          <option value="medium">Medium</option>
          <option value="medium/high">Medium/High</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        <input type="text" id="age" value={age} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label>
        <input type="text" id="age" value={age} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label>
        <input type="text" id="waterConsumption" value={waterConsumption} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label>
        <input type="text" id='steps' value={steps} className='block w-2/4 mx-auto bg-extra-light-blue rounded shadow 2xl:h-6 mt-2'/>
      </label>
      <label>
        <input type="submit" value="Submit" className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer' />
      </label>
    </form>
  )
} 

export default PersonalData;