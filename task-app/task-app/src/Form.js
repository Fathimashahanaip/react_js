import React, { useEffect, useState } from 'react'

function Form() {
    const [first, setfirst] = useState('')
    // useEffect(() => {alert(`the name you enterd was ${first}`)
    
    // }, [first])
    const handleSubmit=(event)=>{
        
    }
    
  return (
    <div>
        <form>
            <label> Enter Your Name:
            <input 
            value={first}
            type="Text"
            onChange={(e)=>setfirst(e.target.value)}>

            </input>
            <input type='submit'></input>
            </label>
        </form>
    </div>
  )
}

export default Form