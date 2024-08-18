import { useState } from 'react'
import './common.css' 
//@ts-ignore
import reactLogo from '../assets/react.svg'
interface Args {
  extendStyle?:String;
  labelVal?:String;
}
 
export const InputComponent = (props:Args)  => {

  return (
    <div>
      <img src={reactLogo} className='logo'></img>
      <button className='btn'>
        Test Btn
      </button>
    </div>
  )
}
 