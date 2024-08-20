import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CusButton from './../../src/components/CusButton/CusButton';
import CusInput from './../../src/components/CusInput/CusInput';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Test Components</h1>
       <CusButton></CusButton>
       <CusInput></CusInput>
      </div>
    </>
  )
}

export default App
