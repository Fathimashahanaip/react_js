import React, { useState } from 'react'

function S() {
    const [b, setb] = useState(
        {name:'shahana',class:10}
    )
    const changeclass=()=> {
        setb(previousobj=>{
            return{...previousobj,class:15}
        })
    }
  return (
 
    <div>
        <h3>{b.name}</h3>
        <h2>{b.class}</h2>
        <button style={{color:'black',backgroundColor:'green'}} onClick={changeclass}>Button</button>
        </div>
    )

}

export default S