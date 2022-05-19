import React from 'react';

import Footer from '../Footer/Footer';
import PersonalData from './PersonalData/PersonalData';

const Profile: React.FC = () => {
  return (
    <section className='right-panel bg-grey-bg'>
      <div className='right-panel-content flex'>
        <section className='w-4/5 h-8/10 bg-white shadow-lg flex flex-col rounded m-auto'>
          <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-3xl my-2'>User Profile</h2>
          <hr className='bg-extra-light-blue border border-solid w-10/12 mx-auto'/>
          <div className='flex my-auto h-4/6 justify-around'>
            <PersonalData/>
            <div className='w-2/5 h-48 '></div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default Profile;