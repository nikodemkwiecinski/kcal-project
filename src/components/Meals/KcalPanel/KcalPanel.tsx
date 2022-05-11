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
    <section>
      <header className='flex'>
        <button onClick={() => changeDate('decrement')}>
          <FontAwesomeIcon icon={solid('caret-left')}/>
        </button>
        <div>
          <p>
            {WEEKDAY[currDay.getDay()]}
          </p>
          <p>
            {`${currDay.getDate()}.${currDay.getMonth() + 1 < 10 ? '0' + (currDay.getMonth()+1) : currDay.getMonth()+1}.${currDay.getFullYear()}`}
          </p>
        </div>
        <button onClick={() => changeDate('increment')}>
          <FontAwesomeIcon icon={solid('caret-right')}/>
        </button>
      </header>
    </section>
  )
}

export default KcalPanel;