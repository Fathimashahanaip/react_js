import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './App1.css';

const App2 = (props) => {
    const a=props.data
    const b=props.data1
    const [first, setfirst] = useState(a)
  return (
    first.map((dt)=>
    <div>
      
        <center>
            <Container>
            <Row className='row'>
                <Col className='col'>
        <Card style={{ width: '18rem' }} className="car">
      <Card.Img variant="top" src={dt.image} width={500} height={300}/>
      <Card.Body>
        <Card.Title>{dt.name}</Card.Title>
        <Card.Text>
        {dt.price}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    
    <button onClick={()=>setfirst(b)}>Change data</button>
    </center>


    </div>

  )
  
  )
}

export default App2