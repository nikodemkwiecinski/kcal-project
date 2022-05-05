import React from 'react';

import Footer from '../Footer/Footer';
import img from '../../images/blueberries.jpg'

const Home: React.FC = () => {
  return (
    <section className='right-panel'>
      <div className="right-panel-content relative">
        <h1 className='absolute text-white text-7xl font-bold bottom-40 right-20'>
          Count your way to 
          <br className='block mt-4'/>
          dream weight.
        </h1>
        <img src={img} alt="Home Page" className='block w-full h-9/10 object-cover object-right'/>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default Home;