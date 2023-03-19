import React, { useContext } from 'react'
import { userContext } from './Context'
import { Carousel } from 'react-bootstrap'

function Carou() {
    const {caro}=useContext(userContext)
    console.log(caro)
  return (
    
    <div>
        <Carousel>
           {caro.map((data)=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
            )}
      </Carousel>
    </div>
  )
  
}

export default Carou