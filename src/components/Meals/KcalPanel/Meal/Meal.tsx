import React, { useContext, useState } from 'react';
import { ActiveUser, UserStoreContext } from '../../../UserStore/UserStore';

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
      <div>
        <p>{mealName}</p>
        <p>{totalKcal} kcal</p>
      </div>
      <div>
        <p>Total</p>
        <div className='flex'>
          <span className='block'>
            {protein}
          </span>
          <span className='block'>
            {fat}
          </span>
          <span className='block'>
            {carbs}
          </span>
        </div>
      </div>
    </>
  )
}

export default MealHeader;