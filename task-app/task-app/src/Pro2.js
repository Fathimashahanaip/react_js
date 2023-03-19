import React from 'react'

const Pro2 = (props) => {
    const b1=props.a1
    console.log(b1)
  return (
    b1.map((dt)=>
    <div>
     {dt.name}


     </div>
    )
    
  )
  
}

export default Pro2