import React from 'react';

import Footer from '../Footer/Footer';
import MacroPanel from './MacroPanel/MacroPanel';
import TrackPanel from './TrackPanel/TrackPanel'

interface Props{

}

const Calculator: React.FC<Props> = () => {
  return (
    <section className='right-panel bg-grey-bg'>
      <div className='right-panel-content flex'>
      <section className='w-4/5 h-8/10 bg-white shadow-lg flex flex-col rounded m-auto'>
          <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>Calculator</h2>
          <hr className='bg-extra-light-blue border border-solid w-10/12 mx-auto'/>
          <div className='flex my-auto h-2/5 justify-around'>
            <MacroPanel/>
          </div>
          <div className='flex my-auto h-2/5 justify-around'>
            <TrackPanel/>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default Calculator;