import React from 'react';

import './style.css'

interface TestProps{
  test: number,
  test2: string
}

const App: React.FC<TestProps> = ({test, test2}) => {
  return (
    <>
      <h1 className='text-red-800'>{test2}{test}</h1>
    </>
  )
}
 
export default App;