import React, { useState } from 'react';

import LogIn from './LogIn/LogIn';
import SignIn from './SignIn/SignIn';

interface Props{
  blurToogle: boolean,
  userLoged: boolean,
  setIsUserLoged: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPanel: React.FC<Props> = ({userLoged, setIsUserLoged, blurToogle}) => {

  const [tooglePanel, setTooglePanel] = useState<boolean>(true);

  const currPanel: React.FC = tooglePanel ? LogIn : SignIn;

  console.log('login ')

  return (
    <section className={`${blurToogle ? 'fixed flex-col' : 'hidden'} rounded-sm top-1/2 lef-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-light-white`}>
      <div className='fixed'>
        <button>Sign in</button>
        <button>Sign up</button>
        {currPanel}
      </div>
    </section>
  )
}

export default LoginPanel;