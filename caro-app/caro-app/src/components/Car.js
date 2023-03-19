import React, { useContext } from 'react'
import { Carousel } from 'react-bootstrap'
import { userContext } from './Context'

function Car() {
    const {caro}=useContext(userContext)
  return (
    <div>
          <Carousel>
           {caro.map((data)=>{
            return(
           
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
            )
    
            }
            )
            }
      </Carousel>
    </div>
  )
}

export default Car