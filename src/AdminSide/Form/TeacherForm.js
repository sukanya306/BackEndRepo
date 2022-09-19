import React, { useState } from "react";
import "./Form.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

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
  };
  const standard = {
    standard_id,
  };
  const teacher = { user, qualification, standard };

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

    const student = { user, rollno, classid };
    console.log(student);

    // axios.post("http://localhost:8080/admin/addstudent",{
    //         student
    //       }).then(res=>console.log("DATA COLLECTED",res))

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
      <h1 className="heading"> {props.name}</h1>

      <div className="Form">
        <form className="materialForm">
          <TextField
            id="outlined-basic"
            label={props.firstField}
            variant="outlined"
            required
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
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
            onChange={(e) => setStandardId(e.target.value)}
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
          <br />

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
