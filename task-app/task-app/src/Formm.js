import React, { useState } from 'react'

function Formm() {
    const [first, setfirst] = useState('')
    console.log(first)
    const sub = (ev)=>{
        ev.preventDefault();
        alert(`your enterd name was:${first}`)
    }
  return (
    <div>
        <form onSubmit={sub}>
            <label>Name</label>
            <input type="text" value={first} onChange={(e)=>setfirst(e.target.value)}/>
            <input type="submit"/>
            
        </form>

    </div>
  )
}

export default Formm