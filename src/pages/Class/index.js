import React, { useState,useRef,useEffect } from 'react';

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
import Chart from 'chart.js/auto';

function Class() {
    const [showField1, setShowField1] = useState(true);
    const [showField2, setShowField2] = useState(false);
    const [email, setEmail] = useState("")
    const [error, setErrorMessage] = useState("")
    const [otp, setOTP] = useState("")

    const styles = {

        qrcode: {
            textAlign: "center",
            marginTop: "50px"
        }
    };

    const chartRef = useRef(null);
    let myChart = null;
    useEffect(() => {
        if (myChart) {
            myChart.destroy();
          }
        // Create the chart when the component mounts
        const ctx = chartRef.current.getContext('2d');
         myChart=new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'Attendance Summary',
                        data: [10, 25, 12, 30, 45],
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    }, []);
    return (
        <div>
            <NavbarComponent />
            <Container style={{ marginTop: "50px" }}>

                <Row>
                    <Col xs={8}>
                        <h2>Machine Learning</h2>

                        <div style={{ overflowY: "scroll", height: "270px" }}>
                            <Card style={{ marginTop: "30px", width: "70%", backgroundColor: "#F7F6FA" }}>

                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>26/05/23 Friday</Card.Title>

                                        </Col>
                                        <Col>
                                            <Button variant="primary" >Download Attendance</Button>
                                        </Col>
                                    </Row>


                                </Card.Body>
                            </Card>

                            <Card style={{ marginTop: "30px", width: "70%", backgroundColor: "#F7F6FA" }}>

                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>26/05/23 Friday</Card.Title>

                                        </Col>
                                        <Col>
                                            <Button variant="primary" >Download Attendance</Button>
                                        </Col>
                                    </Row>


                                </Card.Body>
                            </Card>

                            <Card style={{ marginTop: "30px", width: "70%", backgroundColor: "#F7F6FA" }}>

                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>26/05/23 Friday</Card.Title>

                                        </Col>
                                        <Col>
                                            <Button variant="primary" >Download Attendance</Button>
                                        </Col>
                                    </Row>


                                </Card.Body>
                            </Card>
                        </div>
                        <div className="chart-container">
                            <canvas ref={chartRef} style={{height:"35vh"}}/>
                        </div>
                    </Col>
                    <Col>
                        <h5 style={{ marginBottom: "30px" }}>Current Attendees</h5>
                        <div style={{ overflowY: "scroll", height: "470px" }}>
                        <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>

                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Harshit</div>20070122050
                                </div>
                                <MDBBadge pill light>
                                    92%
                                </MDBBadge>
                            </MDBListGroupItem>
                        </MDBListGroup>
                        </div>
                        <div style={{marginTop:"30px"}}>
                        <Button variant="primary">Download Report</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Class;