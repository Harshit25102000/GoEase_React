import React, { useState, useEffect } from 'react';

import { BACKEND_URL } from "../../config";
import NavbarComponent from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { render } from "react-dom";
import { QRCode } from "react-qr-svg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Spinner from '../../components/spinner';
function QRpage(props) {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [qrdata, setQRdata] = useState({})
    const [show,setShow]=useState(false)
    const apiData = state.data;
    const class_name=apiData.class;
    const additional=apiData.add;
    const auth_type=apiData.auth;
    console.log(apiData)
    const styles = {

        qrcode: {
            textAlign: "center",
            marginTop:"50px"
        }
    };

    const callAPI = async () => {
        //fetching class data
        fetch(BACKEND_URL + '/teacher/generate_qr', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true
          },
          body:JSON.stringify({class_name,additional,auth_type }),
         
        })
  
          .then(async (response) => {
            const data = await response.json();
            if (data.success && data.data && data.data.status === 'SUCCESS') {
              
              setQRdata(data.data)
            } else {
              alert("Problem fetching data")
  
            }
          })
          .catch((error) => {
           alert(error)
  
          });
          setShow(true);
          
      };
    
  useEffect(() => {

    fetch(BACKEND_URL + '/teacher/@me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true
        },
       
  
      })
  
        .then(async (response) => {
          const data = await response.json();
          if (data.success && data.data && data.data.status === 'SUCCESS') {
  
            ;
  
  
          } else {
            navigate("/");
  
          }
        })
        .catch((error) => {
          navigate("/");
  
        });
  
 
    const interval = setInterval(callAPI, 3000); 

    return () => clearInterval(interval);
  }, []);



  const handleStop = () => {
    
    fetch(BACKEND_URL + '/teacher/stop_qr', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true
        },
        body:JSON.stringify({class_name,additional,auth_type }),
       
      })

        .then(async (response) => {
          const data = await response.json();
          if (data.success && data.data && data.data.status === 'SUCCESS') {
            
            navigate("/home");
          } else {
            alert("Problem fetching data")

          }
        })
        .catch((error) => {
         alert(error)

        });
        
    };


  


    return (
        <div>
            <NavbarComponent />
            {show?(
            <Container style={{ marginTop: "50px" }}>

                <Row>
                    <Col xs={8}>
                        <Row>
                            <Col>
                                <p>Present Students</p>
                                <h2 style={{ color: "#80e5ff" }}>30</h2>
                            </Col>
                            <Col>
                                <p >Total Students</p>
                                <h2 style={{ color: "#ffa366" }}>30</h2>
                            </Col>
                            <Col>
                                <p>Attendance Percentage</p>
                                <h2 style={{ color: "#5cd65c" }}>30 %</h2>
                            </Col>
                        </Row>

                        <div style={styles.qrcode}>
                            <QRCode
                                level="Q"
                                style={{ width: 350 }}
                                value={JSON.stringify(qrdata)}
                            />
                        </div>
                        <div style={{marginTop:"50px",marginLeft:"350px"}}>
                        <Button variant="outline-primary" onClick={handleStop}>Stop Attendance</Button>{' '}
                        </div>
                    </Col>
                    <Col>
                        <h5 style={{ marginBottom: "30px" }}>Current Attendees</h5>
                        <div style={{ overflowY: "scroll", height: "510px" }}>
                        <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>

                            </MDBListGroupItem>
                        </MDBListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>):(
                <div style={{width:"200%",marginTop:"200px",marginLeft:"750px"}}>
                    <Spinner />
                    <h5 style={{marginTop:"20px",marginLeft:"-95px"}} >We take a 3 seconds sleep time</h5>
                    </div>
            )};
        </div>
    );
}

export default QRpage;