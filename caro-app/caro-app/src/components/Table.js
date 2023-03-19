import React, { useContext } from 'react'
import { userContext } from './Context'

function Table() {
    const {caro}=useContext(userContext)
  return (
    <div> <Table striped bordered hover>
    <thead>
      <tr>
        <th>Image</th>

      </tr>
    </thead>

    <tbody>
        {caro.map((data)=>{
        return(

            <tr>
            <td>{data.image}</td>
    
          </tr>
        )
        }
        )}

    </tbody>
  </Table></div>
  )
}

export default Table