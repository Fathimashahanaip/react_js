import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [c, setc] = useState(0)
  const [col, setcol] = useState('')

  
  return (
    <div className="App">
      <h1 style={{color:'red'}}>Hello World</h1>

      <p>{c}</p>
      
      <button onClick={()=>setc(c+1)}>ADD</button>
      <button onClick={()=>setc(0)}>RESET</button>
      <button onClick={()=>setc(c-1)}>Decrease</button>
      <p style={{color:col}}>Hello World</p>
      <p>
      <button onClick={()=>setcol('red')}>Red</button>
      <button onClick={()=>setcol('blue')}>Blue</button>
      <button onClick={()=>setcol('green')}>Green</button></p>

      
    </div>
  );
}

export default App;
