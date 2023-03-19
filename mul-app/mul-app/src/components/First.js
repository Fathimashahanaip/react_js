import React, { useContext } from 'react'
import { userContext } from './Context'

function First() {
    const {counter,setcounter,counter1,setcounter1}=useContext(userContext)
  return (
    <div>
        <h1>counter value={counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Add</button>
        <h1>{counter1}</h1>
        <button onClick={()=>setcounter1(counter1-1)}>Substract</button>

    </div>
  )
}

export default First