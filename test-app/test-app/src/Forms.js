import React, { useState } from 'react'

function Forms() {
    const [first, setfirst] = useState({})
    console.log(first)
    const handleChange =(event)=>{
        const name=event.target.name
        const value=event.target.value
        setfirst({...first,[name]:value})
        // console.log(event)

    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type='text'name='name' value={first.name} onChange={handleChange}></input>
            <label>Password:</label>
            <input type='text'  name='pass' value={first.pass}onChange={handleChange}></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default Forms