import React, { useEffect,useState } from 'react';

import { BACKEND_URL } from "../../config";
import NavbarComponent from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClassImg from '../../assets/all_classes.png'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function AllClasses() {
  const navigate = useNavigate();
  const [showField1, setShowField1] = useState(true);
  const [showField2, setShowField2] = useState(false);
  const [email, setEmail] = useState("")
  const [error, setErrorMessage] = useState("")
  const [otp, setOTP] = useState("")
  const [classdata, setClassData] = useState([])
  const [data, setData]=useState("")
  const [authdata, setAuthdata]=useState("")
  const [classname,setClassname]=useState("")
  const [adddata,setAddData]=useState("")
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

                //fetching class data
                fetch(BACKEND_URL + '/teacher/get_classes', {
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
                           
                        } else {
                            alert("Problem fetching data")

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




}, []);


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
            {classdata.map((classitem, index) => (
            <Card key={index} style={{marginTop:"30px", backgroundColor: "#F7F6FA"}}>
              
              <Card.Body>
                <Card.Title>{classitem.name}</Card.Title>
                <Card.Text>
                  {classitem.description}
                </Card.Text>
                <Button variant="primary" style={{marginTop:"10px"}} onClick={()=>navigate("/class",{ state: { className: classitem.name } })}>Open</Button>
              </Card.Body>
            </Card>
         ))}
            
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