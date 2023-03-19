import React, { useState } from 'react'

function Myform() {
    const [fo, setfo] = useState({})
    console.log(fo)
    const handleChange=(ev)=>{
        const name=ev.target.name
        const value=ev.target.value
        setfo(values => ({...values, [name]:value}))
        
    }
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        console.log(fo)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter Your name: :</label>
            <input type="text" name='username' value={fo.username || "" } onChange={handleChange}/>

            <label>Age:</label>
            <input type="number" name='age' value={fo.age || ""} onChange={handleChange}></input>
            
            <input type='submit'/>

        </form>
    </div>
  )
}

export default Myform