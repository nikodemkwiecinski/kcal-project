import React, { useContext, useState } from 'react';
import { ActiveUser, UserStoreContext } from '../../../UserStore/UserStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import Meal from "../Meal/Meal"

interface Props{
  mealName: string
}

const MealHeader: React.FC<Props> = ({mealName}) => {

  const [totalKcal, setTotalKcal] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);

  const activeUser = useContext(ActiveUser);
  const users = useContext(UserStoreContext);

  return (
    <>
      <div className='flex w-10/12 mx-auto rounded p-2 bg-extra-light-blue justify-between'>
        <div className='text-dark-blue w-3/12'>
          <p className='font-bold text-lg text-center'>{mealName}</p>
          <p className='font-bold text-center'>{totalKcal} kcal</p>
        </div>
        <div className='text-dark-blue w-1/3'>
          <p className='font-bold text-center'>Total</p>
          <div className='flex justify-around'>
            <span className='block text-center'>
              {protein}g
            </span>
            <span className='block text-center'>
              {fat}g
            </span>
            <span className='block text-center'>
              {carbs}g
            </span>
          </div>
        </div>
        <FontAwesomeIcon icon={solid('plus')} className='text-dark-blue text-2xl my-auto cursor-pointer'></FontAwesomeIcon>
      </div>
    </>
  )
}

export default MealHeader;