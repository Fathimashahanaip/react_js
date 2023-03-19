import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const Pro2 = (props) => {
    const c=props.data
    const d=props.daa
    const [first, setfirst] = useState(c)

  return (

    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      
      <tbody>
        {first.map((dt)=>{
          
            return(

        
        <tr>
        
          
        <td>{dt.name}</td>
        <td>{dt.price}</td>
        <td><img src={dt.image} width={100} height={100}></img></td>
      </tr>
                
            )
      
        })}
        


      </tbody>
    </Table>
    <button onClick={()=>setfirst(d)}>Change Data</button>
    </div>
    )
  
  
}

export default Pro2