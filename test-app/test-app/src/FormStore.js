import React, { useState } from 'react'

function FormStore() {
    const [form, setform] = useState({})
    console.log(form)
    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setform({...form,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text'name='name' value={form.name} onChange={handleChange}></input>
          <br></br>
            <label>Password:</label>
            <input type='text'name='pass'value={form.pass} onChange={handleChange}></input>
            <br></br>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default FormStore