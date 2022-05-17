import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface Props{
  mealName: string,
  totalKcal: number,
  protein: number,
  fat: number,
  carbs: number,
}

const Meal: React.FC<Props> = ({carbs, fat, mealName, protein, totalKcal}) => {

  return (
    <li>
      <div className='flex w-9/12 mx-auto justify-between my-2'>
        <div className='text-dark-blue w-3/12'>
          <p className='font-bold text-center'>{mealName}</p>
          <p className='font-bold text-center'>{totalKcal} kcal</p>
        </div>
        <div className='text-dark-blue w-1/3 my-auto'>
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
        <FontAwesomeIcon icon={solid('minus')} className='text-dark-blue text-xl my-auto cursor-pointer'></FontAwesomeIcon>
      </div>
    </li>
  )
}

export default Meal;