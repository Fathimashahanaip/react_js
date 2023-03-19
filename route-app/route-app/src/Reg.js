import React from 'react'
import { Card, Col, Container, FormSelect, Row } from 'react-bootstrap'
import './Reg.css';

function Reg() {
  return (
    <div className='back' >
        <center>

      
        <Container fluid>

<Row className='justify-content-center align-items-center m-5'>

  <Card className='ca'>
    

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

      <Row>

        <Col md='6'>
            <label>Name   :</label>
          <input type='text' wrapperClass='mb-4' label='First Name' size='lg' id='form1' placeholder='First Name'/>
        </Col>

        <Col md='6'>
          <input type='text' wrapperClass='mb-4' label='Last Name' size='lg' id='form2' placeholder='Last Name' />
        </Col>

      </Row>
<br></br>
      <Row>

        <Col md='6'>
            <label>Date Of Birth:</label>
          <input type='date' wrapperClass='mb-4' label='Birthday' size='lg' id='form3' placeholder='DOB'/>
        </Col>

        <Col md='6' className='mb-4'>
          <label>Gender:</label>
          <input type='radio' name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />Male
          <input type='radio' name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />FeMale
          <input type='radio' id='inlineRadio3' value='option3' label='Other' inline />Other
        </Col>

      </Row>
<br></br>
      <Row>

        <Col md='6'>
            <label>Email :</label>
          <input type='email' wrapperClass='mb-4' label='Email' size='lg' id='form4'placeholder='Email'/>
        </Col>

        <Col md='6'>
            <label>Phone :</label>
          <input type='number' wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' placeholder='Phone'/>
        </Col>

      </Row>
      <br></br>
      <Row>

<Col md='6'>
<label>Select Department:</label>
      <FormSelect aria-label="Default select example">
      <option>select</option>
      <option value="MBA">MBA</option>
      <option value="MCA">MCA</option>
      <option value="M.Sc">Btech</option>
    </FormSelect>
</Col>

<Col md='6'>
<label>Degree Qualification: </label>
      <FormSelect aria-label="Default select example">
      <option>select</option>
      <option value="BA">MBA</option>
      <option value="B.Sc">MCA</option>
      <option value="BCA">Btech</option>
      <option value="BBA">Btech</option>
      <option value="B.Com">Btech</option>
    </FormSelect>
</Col>

</Row>
<br></br>
      <center>
      <button type='submit' className='button'>Submit</button></center>

  </Card>

</Row>
</Container>











          </center>
    </div>
  )
}

export default Reg