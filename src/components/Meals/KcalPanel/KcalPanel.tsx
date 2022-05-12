import React, {useContext, useState} from 'react';

import { UserStoreContext } from '../../UserStore/UserStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const WEEKDAY: Array<string> = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const KcalPanel: React.FC = () => {

  const [currDay, setCurrDay] = useState(new Date());

  const users = useContext(UserStoreContext);

  const changeDate = (param: string) => {
    const date: Date = new Date(currDay);
    if(param === 'increment'){
      date.setDate(date.getDate()+1)
    }else if(param === 'decrement'){
      date.setDate(date.getDate()-1);
    }
    setCurrDay(date);
  }

  return (
    <section className='w-1/2 h-8/10 bg-white shadow-lg rounded flex flex-col my-auto'>
      <header className='flex text-dark-blue mx-auto my-4'>
        <button onClick={() => changeDate('decrement')} className='mr-8 text-3xl'>
          <FontAwesomeIcon icon={solid('caret-left')}/>
        </button>
        <div className='text-xl'>
          <p className='font-bold text-center'>
            {WEEKDAY[currDay.getDay()]}
          </p>
          <p className='font-bold'>
            {`${currDay.getDate()}.${currDay.getMonth() + 1 < 10 ? '0' + (currDay.getMonth()+1) : currDay.getMonth()+1}.${currDay.getFullYear()}`}
          </p>
        </div>
        <button onClick={() => changeDate('increment')} className='ml-8 text-3xl'>
          <FontAwesomeIcon icon={solid('caret-right')}/>
        </button>
      </header>
      <hr className='border-dark-blue border-solid w-10/12 mx-auto'/>
    </section>
  )
}

export default KcalPanel;