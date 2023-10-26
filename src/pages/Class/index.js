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
import { useLocation,useNavigate } from 'react-router-dom';

function Class({props}) {
    const { state } = useLocation();
    const [dates, setDates] = useState([])
    const className = state.className;
    const navigate = useNavigate();
    console.log(className)
    const styles = {

        qrcode: {
            textAlign: "center",
            marginTop: "50px"
        }
    };

    const chartRef = useRef(null);
    let myChart = null;
    useEffect(() => {

        console.log("checking log")
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
    
                    //fetching class data
                    fetch(BACKEND_URL + '/teacher/get_attendance_dates', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                            withCredentials: true
                        },
                        body: JSON.stringify({ className}),
    
                    })
    
                        .then(async (response) => {
                            const data = await response.json();
                            if (data.success && data.data && data.data.status === 'SUCCESS') {
                                setDates(data.data.data);
                               
                            } else {
                                alert("No attendance found")
    
                            }
                        })
                        .catch((error) => {
                            alert(error)
    
                        });
    
    
    
                } else {
                    navigate("/");
    
                }
            })
            .catch((error) => {
                navigate("/");
    
            });
    
            console.log(dates)
            


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

    const handleDownloadClick = async (date) => {
        try {
  
            console.log(date);
            console.log(className);
          const response = await fetch(BACKEND_URL + '/teacher/download_attendance', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            },
            body: JSON.stringify({date,className}),
          });
    
          // Create a blob URL for the Excel file and trigger the download
          console.log(response)
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'data.csv';
        //   document.body.appendChild(a);
          a.click();
        //   window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error:', error);
        }
      };


    return (
        <div>
            <NavbarComponent />
            <Container style={{ marginTop: "50px" }}>

                <Row>
                    <Col xs={8}>
                        <h2>{className}</h2>

                        <div style={{ overflowY: "scroll", height: "270px" }}>
                        {dates.map((date, index) => (
                            <Card key={index} style={{ marginTop: "30px", width: "70%", backgroundColor: "#F7F6FA" }}>

                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>{date}</Card.Title>

                                        </Col>
                                        <Col>
                                            <Button onClick={()=>handleDownloadClick(date)} variant="primary" >Download Attendance</Button>
                                        </Col>
                                    </Row>


                                </Card.Body>
                            </Card>
                                 ))}
                          
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