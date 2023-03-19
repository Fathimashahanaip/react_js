import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [name, setname] = useState('shahana')
    useEffect(() => {alert(`my name is ${name}`)
    }, [name])
    


  return (
    <div>
        <p>
{name}
        </p>
        <button onClick={()=>setname('finu')}>name change</button>
    </div>
  )
}

export default Useeffect