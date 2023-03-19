import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Useeffect from './Useeffect';
import Useeffect1 from './Useeffect1';
import Propeties from './Propeties';
import Pro1 from './Pro1';
import S from './S';
import Spread from './Spread';
import P1 from './P1';
import Pp1 from './Pp1';
import Form from './Form';
import Formm from './Formm';
import Names from './Names';
import Myform from './Myform';
import Spp from './Spp';
import Api from './Api';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Useeffect/>
    <Useeffect1/> */}
    <Propeties/>
    <Pro1/>
    <S/>
    <Spread/>
    <P1/>
    <Pp1/>
    <Form/>
    <Formm/>
    <Names/>
    <Myform/>
    <Spp/>
    <Api/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
