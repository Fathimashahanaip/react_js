import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fir from './Fir';
import Array from './Array';
import Arrobj from './Arrobj';
import Barnav from './Barnav';
import Arrcard from './Arrcard';
import Obj from './Obj';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Fir/>
    <Array />
    <Arrobj />
    <Barnav />
    <Arrcard />
    <Obj/>
    

    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
