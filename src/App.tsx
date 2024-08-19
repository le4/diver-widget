import { useState } from 'react'
import reactLogo from './assets/react.svg'

import '@radix-ui/themes/styles.css';

import { InputComponent } from './components/InputComponent'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Vite + React</h1>
      <div className="card">
        <InputComponent ></InputComponent>
      </div>
    
    </>
  )
}

export default App
