import React, { useState } from 'react'

function Spread() {
    const a=[1,2,3]
    const b=[4,5,6]
    const c=[...a,...b]
    const [first, setfirst] = useState(
        {name:'aju',age:24}
    )
    const changeage=()=> {
        setfirst(previousobj=>{
            return{...previousobj,age:60}
        }
            
            

        )

    }
  return (
    <div>
       <p> {c} </p>
       <h1>{first.name}</h1>
       <h2>{first.age}</h2>
       <button onClick={changeage}>Change</button>
    </div>
  )
}

export default Spread