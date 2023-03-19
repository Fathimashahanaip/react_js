import React, { useState } from 'react'
import Properties1 from './Properties1'

function Propeties() {
    const [first, setfirst] = useState(
        [{name:'shahana',id:1},
    {name:'finu',id:2}]
    )
    console.log(first)
  return (
    <div>
        <Properties1 data={first}/>
    </div>
  )
}

export default Propeties