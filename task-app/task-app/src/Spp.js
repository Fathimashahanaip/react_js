import React, { useState } from 'react'

function Spp() {
    const [first, setfirst] = useState([
        {name:'shan',quali:'MCA'},
        {name:'jabi',quali:'MBA'}
    ])
  return (
    <div><h1>{first.name}</h1>
    <h2></h2></div>
  )
}

export default Spp