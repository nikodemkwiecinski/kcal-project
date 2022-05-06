import React, { useState } from 'react';

import LogIn from './LogIn/LogIn';
import SignIn from './SignIn/SignIn';

import { BlurProps } from '../Home/Home';

const LoginPanel: React.FC<BlurProps> = ({userLoged, setIsUserLoged, blurToogle}) => {

  const [tooglePanel, setTooglePanel] = useState<boolean>(true);

  const currPanel: JSX.Element = tooglePanel ? <LogIn/> : <SignIn/>;

  return (
    <section className={`${blurToogle ? 'fixed flex flex-col' : 'hidden'} rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-half bg-light-white z-50`}>
      <div className='fixed'>
        <button>Sign in</button>
        <button>Sign up</button>
        {currPanel}
      </div>
    </section>
  )
}

export default LoginPanel;