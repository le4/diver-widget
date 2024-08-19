import React,{ useState } from 'react'
import './common.css'
//@ts-ignore
import reactLogo from '../assets/react.svg'

import { Button } from '@radix-ui/themes';

import axios from 'axios';

interface Args {
  extendStyle?: String;
  labelVal?: String;
}

export const InputComponent = (props: Args) => {

  const [time, setTime] = React.useState('');

  const btnClick = () => {
    console.log("btnClick==>")
    axios.get('https://y.ctpia.com.cn/v1/test')
      .then(response => {
        // 请求成功处理
        console.log(response.data);
        setTime(response.data.message.time)
      })
      .catch(error => {
        // 请求失败处理
        console.error(error);
      });
  }

  return (
    <div>
      <img src={reactLogo} className='logo'></img>
      <Button className='btn' onClick={btnClick}>
        GET
      </Button>
      {time}
    </div>
  )
}
