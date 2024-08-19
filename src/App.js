import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '@radix-ui/themes/styles.css';
import { InputComponent } from './components/InputComponent';
function App() {
    const [count, setCount] = useState(0);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Vite + React" }), _jsx("div", { className: "card", children: _jsx(InputComponent, {}) })] }));
}
export default App;
