import React, { useState } from "react";
import "./Form.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import TopNavBar from '../NavBars/TopNavBar'
import NestedSideBar from '../NavBars/NestedSideBar'

// import * as React from 'react';

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Form(props) {
  function fun() { }

  const [roll_no, setRollno] = useState("");
  //   const [id,setId] = useState();
  const [standard_id, setClassId] = useState("");

  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const postData = (e) => {
    e.preventDefault();
    const user = {
      dob,
      email,
      first_name,
      last_name,
      username,
      password,
      gender,
      contact,
    };
    const standard = {
      standard_id
    }


    const student = { user, roll_no, standard };
    console.log(student);


    fetch("http://localhost:8080/admin/addstudent", {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
  };

  return (
    <div className='MainContainerAdminHomePage'>
      <div className="topBar" >
        <TopNavBar />

      </div>


      <div className="sideBar" >
        <NestedSideBar />
      </div>


      {/* className="materialForm" */}
      <div className="Form">
        <h1 className="heading"> {props.name}</h1>
        <form className="materialForm" >
          <div className="row">
            <div className="col-25">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Fisrt Name *"
                required
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                 />
            </div>
            <div className="col-25">
              <input
                type="text"
                id="lname"
                name="lastname"
                required
                placeholder="Lastname *"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="col-25">
              <input
                type="text"
                id="rollno"
                label={props.firstField}
                name="rollno"
                placeholder="Roll Number *"
                required
                value={roll_no}
                onChange={(e) => setRollno(e.target.value)}
                />
            </div>
            <div className="col-25">
              <input
                type="text"
                id="standardid"
                name="standardid"
                placeholder="Standard Id *"
                required
                label={props.id}
                value={standard_id}
                onChange={(e) => setClassId(e.target.value)}
                />
            </div>
            <div className="col-25">
              <input
                type="number"
                id="contact"
                name="contact"
                placeholder="Contact *"
                required
                label="Number"
                defaultValue={+91}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                 />
            </div>
            <div className="col-25">
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="Date Of Birth *"
                required
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                 />
            </div>
            <div className="col-25">
              <input
                type="text"
                id="gender"
                name="gender"
                placeholder="Gender *"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                 />
            </div>
            
            <div className="col-25">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="col-25">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="User Name *"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="col-25">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password *"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>



          </div>
          {/* <TextField
            id="outlined-basic"
            label={props.firstField}
            variant="outlined"
            required
            value={roll_no}
            onChange={(e) => setRollno(e.target.value)}
            // value={id}

            sx={{
              width: 500,
            }}
          />

          <br />

          <TextField
            id="outlined-basic"
            label={props.id}
            variant="outlined"
            required
            value={standard_id}
            onChange={(e) => setClassId(e.target.value)}
          />

          <br />

          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue={+91}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <br />
          <TextField
            id="outlined-basic"
            label="Date of Birth"
            variant="outlined"
            required
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          <br />

          <TextField
            id="outlined-basic"
            label="EmailId"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            required
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />

          <TextField
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />

          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <br />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> */}

          <br />
          {/* onClick={(e)=>setId(e.target.value)} */}
          <Button
            variant="contained"
            color="success"
            onClick={postData}
            sx={{
              height: 50,
            }}
          >
            Submit
          </Button>

          <FormControl></FormControl>

          {/* <p>{console.log(id)}</p> */}
        </form>
      </div>
    </div>
  );
}

export default Form;
