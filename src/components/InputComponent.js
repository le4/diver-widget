import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './common.css';
//@ts-ignore
import reactLogo from '../assets/react.svg';
import { Button } from '@radix-ui/themes';
import axios from 'axios';
export const InputComponent = (props) => {
    const [time, setTime] = React.useState('');
    const btnClick = () => {
        console.log("btnClick==>");
        axios.get('https://y.ctpia.com.cn/v1/test')
            .then(response => {
            // 请求成功处理
            console.log(response.data);
            setTime(response.data.message.time);
        })
            .catch(error => {
            // 请求失败处理
            console.error(error);
        });
    };
    return (_jsxs("div", { children: [_jsx("img", { src: reactLogo, className: 'logo' }), _jsx(Button, { className: 'btn', onClick: btnClick, children: "GET" }), time] }));
};
