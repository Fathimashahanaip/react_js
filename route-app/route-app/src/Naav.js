import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import './Naav.css';

function Naav() {
  return (
    <div>
        <Navbar className='nna' variant="dark">
        <Container>
         <Link to='/'><Navbar.Brand href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AhECrhRWkacaoMMsl8DRaZtbxowLYDYN_Q&usqp=CAU" width={150} height={100}></img></Navbar.Brand></Link>
          <Nav className="me-auto">
           <li> <Link to="/" className='home'>Home</Link></li>
            {/* <NavLink href="/">Home</NavLink> */}
            {/* <NavLink to="/">Home</NavLink> */}
            
            <Link to="/login" className='login'>
           
                Login
                </Link>
          <Link to="/reg" className='reg'>Registration</Link> 
           {/* <Link to ='/'> <Nav.Link href="#pricing">Products</Nav.Link></Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naav