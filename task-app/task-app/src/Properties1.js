import React from 'react'

const Properties1 = (props) => { 
    const a=props.data
    console.log(a)
  return (
    a.map((b)=>
    <div><h1>{b.name}</h1></div>
    )
  )
}

export default Properties1