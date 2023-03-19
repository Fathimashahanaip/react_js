import React from 'react'

function Arrobj() {
    var obarr=[{id:1,name:'shahana',age:23}]
    console.log(obarr)
  return (
    obarr.map((data)=>
    <div>
        {data.id}    {data.name}     {data.age}


    </div>
    )
  )
}

export default Arrobj