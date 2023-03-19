import React, { useState } from 'react'
import Pro2 from './Pro2'

function Pro1() {
    const [id,setid] = useState(
        [{name:'arjun',age:2},
    {name:'ram',age:4}
]
    )
  return (
    <div>
        <Pro2 a1={id}/>
            </div>
  )
}

export default Pro1