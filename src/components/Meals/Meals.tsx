import React from 'react';

import KcalPanel from './KcalPanel/KcalPanel';
import Footer from '../Footer/Footer';

const Meals: React.FC = () => {
  return (
    <section className='right-panel'>
      <div className='right-panel-content bg-grey-bg'>
        <KcalPanel/>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default Meals;