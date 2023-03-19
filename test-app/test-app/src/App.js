import logo from './logo.svg';
import './App.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function App() {
  const arr=[{name:'Iphone',price:200000,image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg'},
  {name:'laptop',price:35000,image:'https://img3.exportersindia.com/product_images/bc-full/2019/7/4635629/laptop-1564400518-5021074.jpeg'},
  {name:'Kurthi',price:1500,image:'https://www.pehnavafashionmart.com/userdata/public/gfx/97768.jpg'},
  {name:'Facewash',price:350,image:'https://www.bigbasket.com/media/uploads/p/l/301673-2_1-garnier-skin-naturals-pure-active-neem-face-wash.jpg'},
]
  return (
    arr.map((data)=>
    <div className="App">
      <Container>
      <Row className='row'>
        <Col>
        <center>
      <Card style={{ width: '18rem' }} className='ca'>
      <Card.Img variant="top" src={data.image}width={500} height={300} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
{data.price}
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
    </center>
    </Col>
</Row>
</Container>

    </div>
  )
  )
}

export default App;
