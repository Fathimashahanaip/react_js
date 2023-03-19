import React from 'react'

const Pp2 = (props) => {
const c=props.data
  return (
    c.map((dt)=>
    <div>
        <h2>
            {dt.nick}
        </h2>

    </div>
    )
  )
}

export default Pp2