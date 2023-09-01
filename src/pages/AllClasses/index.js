import React, { useState } from 'react';

import { BACKEND_URL } from "../../config";
import NavbarComponent from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClassImg from '../../assets/all_classes.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function AllClasses() {
  const [showField1, setShowField1] = useState(true);
  const [showField2, setShowField2] = useState(false);
  const [email, setEmail] = useState("")
  const [error, setErrorMessage] = useState("")
  const [otp, setOTP] = useState("")
  

  return (
    <div>
      <NavbarComponent />
      <Container>

        <Row>
          <Col>
          <div>
            <h5 style={{margin:"47px 0px 0px 50px",cursor:"pointer"}}>+ Add Class</h5>
            </div>
            <div style={{ overflowY: "scroll", height: "530px" }}>
            <Card style={{marginTop:"30px", backgroundColor: "#F7F6FA"}}>
              
              <Card.Body>
                <Card.Title>Cyber Security</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" style={{marginTop:"10px"}}>Open</Button>
              </Card.Body>
            </Card>

            <Card style={{marginTop:"30px", backgroundColor: "#F7F6FA"}}>
              
              <Card.Body>
                <Card.Title>Machine Learning</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" style={{marginTop:"10px"}}>Open</Button>
              </Card.Body>
            </Card>

            <Card style={{marginTop:"30px", backgroundColor: "#F7F6FA"}}>
             
              <Card.Body>
                <Card.Title>BlockChain</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" style={{marginTop:"10px"}}>Open</Button>
              </Card.Body>
            </Card>
            <Card style={{marginTop:"30px", backgroundColor: "#F7F6FA"}}>
             
             <Card.Body>
               <Card.Title>BlockChain</Card.Title>
               <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
               </Card.Text>
               <Button variant="primary" style={{marginTop:"10px"}}>Open</Button>
             </Card.Body>
           </Card>
           <Card style={{marginTop:"30px", backgroundColor: "#F7F6FA"}}>
             
             <Card.Body>
               <Card.Title>BlockChain</Card.Title>
               <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
               </Card.Text>
               <Button variant="primary" style={{marginTop:"10px"}}>Open</Button>
             </Card.Body>
           </Card>
            </div>
          </Col>
          <Col>
          
            <img src={ClassImg} alt="My Image" style={{ marginTop:"80px"}} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AllClasses;