import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import classes from './Home.module.css'
import studentImage from '../Pictures/student.png'
import { useNavigate } from 'react-router-dom'
import StudentPage from './StudentPage';
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios"
import Example_Dropmenu from './Example_Dropmenu';

export default function FormUser() {
  // useNavigate will contain the hostory of pages
  const navigate = useNavigate()
  const res = null
  const [userid, setUserId] = useState('')
  const [errorUserId, setErrorUserId] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')



 
  const getdropdownData = (roles) => {
    setRole(roles);
    console.log(role)
  }
  const handleClick = async (e) => {
    e.preventDefault()
    console.log(role)
    console.log(userid, password)
    if (userid === '' && password === '') {
      setErrorPassword("Please enter the password")
      setErrorUserId("Please enter the userid")
    }

    else {
      if (role === "Teacher") {
        navigate('./teacher')
      }
      else if (role === "Student") {
        navigate('./StudentPage')

      }
      else if (role === "Admin") {
        navigate('./admin')
      }
      else{
        alert("Bye")
        console.log(role)
      }

    }


    res = await axios.post("http://localhost:9090/student/add", { userid: userid, password: password, role: role })
      .then((response) => {
        console.log(response)  })
    console.log(res.response)

    //getdata = await axios.get("http://localhost:9090/student/show").then((response1)=>console.log(response1))


  }

  return (
    <div className={classes.body}>
      <div>
        <header className={classes.header}></header>

        <Form className={classes.form}>
          <header >

            <div style={{ fontSize: "35px", marginLeft: "120px", marginBottom: "20px", marginTop: "20px" }}>LogIn Here
            </div>
          </header>

          <FormGroup row>
            <Label for="userid" sm={4}>UserId</Label>
            <Col sm={7}>
              <Input required type="text" name="userid" id="userid"
                value={userid}
                // isInvalid={!!errors.userid}
                onChange={(e) => setUserId(e.target.value)} />
              <label className={classes.errortext + ' text-danger '}>{errorUserId}</label>

              {/* <FormFeedback invalid {...errors.userid}/> */}

            </Col>

          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={4}>Password</Label>

            <Col sm={7}>
              <Input required type="password" name="password" id="examplePassword"
                value={password}
                // isInvalid={!!errors.userid}
                onChange={(e) => setPassword(e.target.value)}
              // setPassword(e.target.value)
              >
              </Input>
              <label className={classes.errortext + ' text-danger '} >{errorPassword}</label>

              {/* <FormFeedback typeof='invalid' {...errors.password}/> */}

            </Col>
          </FormGroup>
          <Example_Dropmenu onRoleChange={getdropdownData} />



          <Button style={{ background: "rgba(52, 95, 62, 0.8)", marginLeft: "150px", marginTop: "30px" }} onClick={handleClick}>Submit</Button>
        </Form>
        {/* } */}
      </div>
      <div className={classes.image}>
        <img src={studentImage} className="rounded float-end" alt='' style={{ width: "700px" }}></img>
      </div>

    </div>
  )





}






