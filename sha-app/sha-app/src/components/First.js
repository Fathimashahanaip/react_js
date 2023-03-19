import React, { useContext } from 'react'
import { userContext } from './Context'

function First() {
    const {c,setc}=useContext(userContext)
  return (
    <div>
        <h1>{c}</h1>
        <button onClick={()=>setc(c+1)}>Add</button>
        <button onClick={()=>setc(0)}>Reset</button>
        <button onClick={()=>setc(c-1)}>Sub</button>
    </div>
  )
}

export default First