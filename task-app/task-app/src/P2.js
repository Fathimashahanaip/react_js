import React from 'react'

const P2 = (props) => {
    const c=props.data
    console.log(c)
  return (
    c.map((dt)=>
    <div><p>{dt.price}</p></div>
    )
  )
}

export default P2