import React, { useState } from 'react'
import P2 from './P2'

function P1() {
    const [first, setfirst] = useState([
        {category:'car',price:100000},
        {category:'bag',price:3000}
    ])

  return (
    first.map((data)=>
    <div>
        <P2 data={first}/>
    </div>
  )
  )
}

export default P1