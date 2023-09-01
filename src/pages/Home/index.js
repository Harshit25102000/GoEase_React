import React, { useState, useEffect } from 'react';

import { BACKEND_URL } from "../../config";
import NavbarComponent from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Left_Img from '../../assets/home.jpg'

import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home() {
  
  const [email, setEmail] = useState("")
  const [error, setErrorMessage] = useState("")
  const [classdata, setClassData] = useState([])
  const navigate = useNavigate();
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


      //fetching class data
      fetch(BACKEND_URL + '/teacher/get_upcoming_classes', {
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
            setClassData(data.data.data);
            console.log(data.data.data)
            console.log(classdata)
          } else {
            alert("Problem fetching data")

          }
        })
        .catch((error) => {
         alert(error)

        });

  }, []);



  return (
    <div>
      <NavbarComponent />
      <Container>

        <Row>
          <Col>
            <div>
              <h5 style={{ margin: "47px 0px 0px 50px", cursor: "pointer" }}>Upcoming Classes</h5>
            </div>
            <div style={{ overflowY: "scroll", height: "530px" }}>
            {classdata.map((item, index) => (
              <Card key={index} style={{ marginTop: "30px",width:"85%" }}>

                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                   {item.description}
                  </Card.Text>
                  <Button variant="primary" style={{ marginTop: "10px" }} onClick={()=>navigate("/attendance")}>Mark Attendance</Button>
                </Card.Body>
              </Card>
            ))}
            
            </div>
          </Col>
          <Col>

            <img src={Left_Img} alt="My Image" style={{ width: "100%", height: "100%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;