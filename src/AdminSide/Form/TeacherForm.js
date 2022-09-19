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
  const [qualification, setQualification] = useState("");
  const [standard_id, setStandardId] = useState("");

  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const posTeachertData = (e) => {
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
    standard_id,
  };
  const teacher = { user, qualification, standard };


  fetch("http://localhost:8080/admin/addteacher", {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(teacher),
  }).then(() => {
    console.log("New Teacher added");
  });
};
  return (
    <div>
      <div className="topBar" >
        <TopNavBar />

      </div>


      <div className="sideBar" >
        <NestedSideBar />
      </div>
     

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
                placeholder="Qualification *"
                required
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
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
                onChange={(e) => setStandardId(e.target.value)}
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
          {/* onClick={(e)=>setId(e.target.value)} */}
          <Button
            variant="contained"
            color="success"
            onClick={posTeachertData}
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

};



export default Form;
