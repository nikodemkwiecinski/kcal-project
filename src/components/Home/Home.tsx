import React from 'react';

import Footer from '../Footer/Footer';
import LoginPanel from '../LoginPanel/LoginPanel';
import img from '../../images/blueberries.jpg'

export interface BlurProps{
  blurToogle: boolean,
  userLoged: boolean,
  setIsUserLoged: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<BlurProps> = ({blurToogle, setIsUserLoged, userLoged}) => {
  return (
    <>
      <section className={`right-panel ${blurToogle ? 'active-blur' : ''}`}>
        <div className="right-panel-content relative">
          <h1 className='absolute text-white 2xl:text-7xl xl:text-5xl lg:text-4xl font-bold 2xl:bottom-40 xl:bottom-24 lg:bottom-16 right-20'>
            Count your way to 
            <br className='block mt-4'/>
            dream weight.
          </h1>
          <img src={img} alt="Home Page" className='block w-full h-9/10 object-cover object-right'/>
        </div>
        <Footer></Footer>
      </section>
      <LoginPanel 
        blurToogle={blurToogle}
        setIsUserLoged={setIsUserLoged}
        userLoged={userLoged}
      />
    </>
  )
}

export default Home;