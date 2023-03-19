import React, { useState } from 'react'

function Spread() {
    const [first, setfirst] = useState([
        {name:'shahana',age:23}
    ])
    const changeage=()=>{
        setfirst(changeobj=>{
            return{...changeobj,age:24}
        })

    }
  return (
    <div>
        <h1>{first.name}</h1>
        <h2>{first.age}</h2>
        <button onClick={changeage}>Age Change</button>
    </div>
  )
}

export default Spread