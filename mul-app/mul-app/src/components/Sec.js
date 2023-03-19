import React, { useContext } from 'react'
import { userContext } from './Context'

function Sec() {
    const {arr}=useContext(userContext)
  return (
    arr.map((data)=>
    <div><h1>{data.name}</h1>
    <h4>{data.age}</h4>
    </div>

  )
  )
}

export default Sec