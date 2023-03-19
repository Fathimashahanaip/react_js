import React, { useContext } from 'react'
import { userContext } from './Context'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './Cardb.css';

function Cardb() {
    const {tabledata}=useContext(userContext)
  return (
tabledata.map((dt)=>
    <div className='card'>
        <Row className='row'>
            <Col className='col'>
                <center>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dt.image}width={200} height={200} />
      <Card.Body>
        <Card.Title>{dt.name}</Card.Title>
        <Card.Text>
        {dt.age}
        </Card.Text>
        <center>
        <Button variant="primary">Visit</Button></center>
      </Card.Body>
    </Card>
    </center>
    </Col>
    </Row>

    </div>
)
  )
}

export default Cardb