import React, { useState } from 'react'
import Pp2 from './Pp2'

function Pp1() {
    const [first, setfirst] = useState(
        [{nick:'ninu',age:23},
    {nick:'nithu',age:4}]
    )
  return (
    <div>
        <Pp2 data={first}/>
    </div>
  )
}

export default Pp1