import React, { useEffect, useState } from 'react'

function Useeffect1() {
    const [col, setcol] = useState('')
    useEffect(() => {
      alert(`the color is changing into ${col}`)

    }, [col])
    
  return (
    <div>
        <h1 style={{color:col}}>Helloooo</h1>
        <button onClick={()=>setcol('red')}>Red</button>
        <button onClick={()=>setcol('green')}>Green</button>
        <button onClick={()=>setcol('blue')}>Blue</button>


    </div>
  )
}

export default Useeffect1