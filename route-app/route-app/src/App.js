import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Product from './Product';
import Naav from './Naav';
import Reg from './Reg';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Naav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reg' element={<Reg/>}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
