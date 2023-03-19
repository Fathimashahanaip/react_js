import React from 'react'
import './Arraycard.css';
import { Button, Card, Col, Row } from 'react-bootstrap'

function Arrcard() {
    var pro=[{name:'kurtha',price:2000,image:'https://images.meesho.com/images/products/59965887/iou3q_512.jpg'},
     {name:'Shirts',price:1000,image:'http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388'},
     {name:'T-shirt',price:2800,image:'https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0053_5c650849-9d9d-4cc3-8863-6a23778cd9a0.jpg?v=1675170808'},
     {name:'Phone',price:20000,image:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80'},
    {name:'Laptop',price:200000,image:'https://media.wired.com/photos/5fb2cc575c9914713ead03de/1:1/w_1358,h_1358,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg'},
     {name:'Charger',price:1000,image:'https://m.media-amazon.com/images/I/61qF2lNCIHL._SL1500_.jpg'},
     {name:'Headset',price:2800,image:'https://www.lenovo.com/medias/GXD1C67963-500x400-01.png?context=bWFzdGVyfHJvb3R8MTAzNzY1fGltYWdlL3BuZ3xoNDAvaDdjLzExNjIwMTA3Mzg2OTEwLnBuZ3wzZGY1YTJhMmZjYWM3Mzk2YTIxYjRhYjgyY2UwNzZiM2ZjZjg1YjdhNDFmNjFjMzQyOGNkM2ViZGUzNzU3Njdl'},
     {name:'Shawl',price:20000,image:'https://5.imimg.com/data5/IX/UP/LU/ANDROID-4402946/product-jpeg-500x500.jpg'},
     {name:'keyboard',price:2000,image:'https://5.imimg.com/data5/NG/IQ/BG/SELLER-65481850/computer-keyboard-500x500.jpg'},
     {name:'Wings of Fire',price:1000,image:'https://rukminim1.flixcart.com/image/416/416/juk4gi80/book/4/6/6/wings-of-fire-original-imaffmk4gx5pxqvf.jpeg?q=70'},
     {name:'baby dress',price:2800,image:'https://images.unsplash.com/photo-1578897366846-358bb1c2412a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'},
     {name:'pardha',price:20000,image:'https://www.theabayastore.com/wp-content/uploads/2021/04/abaya-1.jpg'},
    {name:'cloths',price:2000,image:'https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://images.ctfassets.net/3s5io6mnxfqz/3N5iXB8yNlqVQS3xWdIIgX/fa0d654680fbd64eb5852dbbbcf4cca4/AdobeStock_303371265.jpeg'},
     {name:'lipstick',price:1000,image:'https://sdcdn.io/mac/in/mac_sku_M0N904_1x1_0.png?width=1080&height=1080'},
     {name:'Facewash',price:2800,image:'http://cdn.shopify.com/s/files/1/0014/3514/0183/products/27465-S3-8901030856365_fe1a09a1-25e2-4556-8b9b-dbab53480c19.jpg?v=1643003418'},
     {name:'eyeshadow',price:20000,image:'https://m.media-amazon.com/images/I/5101qjYR2EL._SL1000_.jpg'}
     
    ]
  return (
    pro.map((data)=>
    <div className='card'>
     
        <Row className='row'>
            <Col>

        <Card style={{ width: '18rem' }}>
         <center>   
      <Card.Img className='img' variant="top" src={data.image} width={500} height={300} />
      
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.price}
  
        </Card.Text>
        <Button className='butt' variant="primary">Buy</Button>
      </Card.Body>
      </center>
    </Card>
    </Col>
    </Row>

    </div>
    )
  )
}

export default Arrcard