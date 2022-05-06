import React, { useState } from 'react';

import LogIn from './LogIn/LogIn';
import SignIn from './SignIn/SignIn';

import { BlurProps } from '../Home/Home';

const LoginPanel: React.FC<BlurProps> = ({userLoged, setIsUserLoged, blurToogle}) => {

  const [tooglePanel, setTooglePanel] = useState<boolean>(true);

  const currPanel: JSX.Element = tooglePanel ? <LogIn/> : <SignIn/>;

  return (
    <section className={`${blurToogle ? 'fixed' : 'hidden'} rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-half bg-light-white z-50`}>
      <div className='flex justify-around h-1/4 text-center'>
        <button onClick={() => setTooglePanel(true)} className={`${tooglePanel ? 'border-y border-x shadow-sm border-black border-solid rounded-md' : ''} h-1/2 w-2/5 self-center`}>Sign in</button>
        <button onClick={() => setTooglePanel(false)} className={`${!tooglePanel ? 'border-y border-x shadow-sm border-black border-solid rounded-md' : ''} h-1/2 w-2/5 self-center`}>Sign up</button>
      </div>
      {currPanel}
    </section>
  )
}

export default LoginPanel;