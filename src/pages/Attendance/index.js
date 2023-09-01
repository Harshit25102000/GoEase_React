import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './attendance.css';
import NavbarComponent from '../../components/Navbar';
import Right_Img from '../../assets/attendance2.png'
import Form from 'react-bootstrap/Form';
function Attendance() {

  return (
    <div>
        <NavbarComponent/>
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={Right_Img} class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='4' style={{marginLeft:"100px"}}>

         
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Mark Attendance</p>
          </div>

        <div style={{marginBottom:"30px"}}>
          <Form.Label htmlFor="inputclass">Select Class *</Form.Label>
          <Form.Select aria-label="Default select example" id="inputclass">
      <option>Class</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </div>

    <div style={{marginBottom:"30px"}}>
         
    <Form.Label htmlFor="authentication">Select Authentication Type *</Form.Label>
    <Form.Select aria-label="Default select example" id="authentication">
      <option>Authentication</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </div>

    <div style={{marginBottom:"30px"}}>
    <Form.Label htmlFor="additional">Additional</Form.Label>
      <Form.Control
        type="text"
        id="additional"
        aria-describedby="passwordHelpBlock"
      />
      </div>


          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Start Attendance</MDBBtn>
           
          </div>

        </MDBCol>

      </MDBRow>

      

    </MDBContainer>
    </div>
  );
}

export default Attendance;