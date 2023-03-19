import React, { useContext } from 'react'
import { userContext } from './Context'
import { Table } from 'react-bootstrap'

function Tab() {
    const {tabledata}=useContext(userContext)
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Age</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {tabledata.map((data)=>{
            return(
                <tr>
         
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td><img src={data.image} width={200} height={200}></img></td>
        </tr>

            )
        })}
        

      </tbody>
    </Table>
    </div>
  )
}

export default Tab