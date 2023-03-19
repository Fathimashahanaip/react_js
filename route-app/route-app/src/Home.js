import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './Home.css';

function Home() {
  return (

<div>
  <h1>WELCOME</h1>

  <h2>UNIVERSITY OF CALICUT</h2>

  <img src='https://bl-i.thgim.com/public/news/xe4vo3/article66182896.ece/alternates/FREE_1200/IIT%20Roorkee%20Campus.jpeg' width={1500} height={500}></img>

    <Row>
      <Col>
      <Card className='car1'>
      <Card.Body><p><p>“Education is not the learning of facts, but the training of minds to think” - Albert Einstein
It is my pleasure to welcome you to Institute of Engineering and Technology (IET), the only Engineering institution governed by the University of Calicut. We know that, technical education facilitates the acquisition of practical and applied skills as well as basic scientific knowledge. We at IET strive to attain our mission to groom our students into high quality technical personnel, with sound engineering knowledge, good managerial skills and high moral values. The College offers a perfect platform for learning and exploring, one’s personal and intellectual abilities. The students can find new dimensions, in learning and exploring their extra-curricular activities with the complete support of highly qualified staffs and Governing Body of the College.</p>
</p></Card.Body>
    </Card>
            </Col>
      <Col>
<Card className='card2'>
      <Card.Img variant="top" src="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/7xmXzQ5uLqDsSOJVt019Ot/83999bd01e980c81a197346cb3cac7ed/StudentLife_StudentGroup_Walking_Outdoor_GettyImages-1165524880.jpg?fit=thumb" width={150} height={150} />
      <Card.Body>
        <Card.Title>MBA</Card.Title>
        <Card.Text>
      
        </Card.Text>
        <Button variant="primary">More details</Button>
      </Card.Body>
    </Card>
      </Col>
    </Row>
</div>
  )
}

export default Home