import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './attendance.css';
import { BACKEND_URL } from "../../config";
import NavbarComponent from '../../components/Navbar';
import Right_Img from '../../assets/attendance2.png'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom"
function Attendance() {


    const navigate = useNavigate();
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

    const handleSelectClass=(event)=>{
        setClassname(event.target.value)
    }
    const handleSelectAuth=(event)=>{
        setAuthdata(event.target.value)
    }
    const handleAddText=(event)=>{
        setAddData(event.target.value)
    }

    const handleStart=()=>{
        const data={
            class:classname,
            auth:authdata,
            add:adddata
        }
        navigate("/qr",{state:{data:data}})
    }
    
    return (
        <div>
            <NavbarComponent />
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src={Right_Img} class="img-fluid" alt="Sample image" />
                    </MDBCol>

                    <MDBCol col='4' md='4' style={{ marginLeft: "100px" }}>


                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Mark Attendance</p>
                        </div>

                        <div style={{ marginBottom: "30px" }}>
                            <Form.Label htmlFor="inputclass">Select Class *</Form.Label>
                            <Form.Select aria-label="Default select example" id="inputclass" onChange={handleSelectClass}>
                                <option>Class</option>
                                {classdata.map((classitem, index) => (
                                <option key= {index} value={classitem.name}>{classitem.name}</option>
                                ))}
                               
                            </Form.Select>
                        </div>

                        <div style={{ marginBottom: "30px" }}>

                            <Form.Label htmlFor="authentication" >Select Authentication Type *</Form.Label>
                            <Form.Select aria-label="Default select example" id="authentication" onChange={handleSelectAuth}>
                                <option>Authentication</option>
                                <option value="Q">QR only</option>
                                <option value="R">Router Vicinity Only</option>
                                <option value="QRB">QR + Rouer Vicinity + Bluetooth Vicinity</option>
                            </Form.Select>
                        </div>

                        <div style={{ marginBottom: "30px" }}>
                            <Form.Label htmlFor="additional">Additional</Form.Label>
                            <Form.Control
                                type="text"
                                id="additional"
                                aria-describedby="passwordHelpBlock"
                                onChange={handleAddText}
                            />
                        </div>


                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleStart}>Start Attendance</MDBBtn>

                        </div>

                    </MDBCol>

                </MDBRow>



            </MDBContainer>
        </div>
    );
}

export default Attendance;