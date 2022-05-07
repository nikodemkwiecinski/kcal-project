import React from 'react';

interface Props{
  userLoged: boolean,
  setIsUserLoged: React.Dispatch<React.SetStateAction<boolean>>,
}

const SignIn: React.FC<Props> = ({setIsUserLoged, userLoged}) => {
  return (
    <form action="">
      <input type="text" name="" id="" />
      <input type="text" name="" id="" />
      <input type="text" name="" id="" />
      <input type="submit" value="" />
    </form>
  )
}

export default SignIn;