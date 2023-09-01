import React, { useState } from 'react';

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
function QRpage() {
    const [showField1, setShowField1] = useState(true);
    const [showField2, setShowField2] = useState(false);
    const [email, setEmail] = useState("")
    const [error, setErrorMessage] = useState("")
    const [otp, setOTP] = useState("")

    const styles = {

        qrcode: {
            textAlign: "center",
            marginTop:"50px"
        }
    };
    return (
        <div>
            <NavbarComponent />
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
                                <h2 style={{ color: "#5cd65c" }}>30</h2>
                            </Col>
                        </Row>

                        <div style={styles.qrcode}>
                            <QRCode
                                level="Q"
                                style={{ width: 350 }}
                                value={JSON.stringify({
                                    destinatary: "KWIK-E-MART",
                                    dynamic: false,
                                    amount: 1500
                                })}
                            />
                        </div>
                        <div style={{marginTop:"50px",marginLeft:"350px"}}>
                        <Button variant="outline-primary">Stop Attendance</Button>{' '}
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
            </Container>
        </div>
    );
}

export default QRpage;