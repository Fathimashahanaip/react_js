import React, { useState } from 'react'

function Names() {
    const [first, setfirst] = useState('')
    const handlesub=(eve)=>{
        eve.preventDefault();
        alert(`The Enterd name was ${first}`)
    }
  return (
    <div>
        <form onSubmit={handlesub}>
            <label>Enter Name:</label>
            <input type="text" value={first} onChange={(e)=>setfirst(e.target.value)}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default Names