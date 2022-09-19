import * as React from "react";
import "./SideNavComponents.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TopNavBar from '../NavBars/TopNavBar'
import NestedSideBar from '../NavBars/NestedSideBar'
export default function DataTable(props) {
  const [rows, setRows] = useState([])

  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:8080/admin/" + props.api,)

      console.log(data.data)
      setRows(data.data)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  if (props.api === "getStudent") {
    return (
      <div>
        <div className="topBar" >
        <TopNavBar />

      </div>


      <div className="sideBar" >
        <NestedSideBar />
      </div>

        {/* Student table for table  */}

        <table className="table table-bordered" style={{marginLeft:"200px",marginTop:"200px",width:"60rem"}}>
        <thead className="table-dark">
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">User name</th>
            <th scope="col">Roll No</th>
            <th scope="col">Gender</th>
            <th scope="col">Email Id</th>
            <th scope="col">DOB</th>
            <th scope="col">Contact No</th>

          </tr>

        </thead>
        
        <tbody>
          {rows.map((item)=>{
              return <tr>
                <td>{item.student_id}</td>
                <td>{item.user.first_name}</td>
                <td>{item.user.last_name}</td>
                <td>{item.user.username}</td>
                <td>{item.roll_no}</td>
                <td>{item.user.gender}</td>
                <td>{item.user.email}</td>
                <td>{item.user.dob}</td>
                <td>{item.user.contact}</td>
                </tr>
              
            })}
            </tbody>         
      </table>
      </div>
    )
      }

  {/* Teacher table for display  */ }
  if (props.api === "getTeacher"){
    return(
      <div>
        <div className="topBar" >
        <TopNavBar />

      </div>


      <div className="sideBar" >
        <NestedSideBar />
      </div>
  <table className="table table-bordered" style={{ marginLeft: "200px" }}>

    <thead className="table-dark">
      <tr>
        <th scope="col">Teacher ID</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">User name</th>
        <th scope="col">Qualification</th>
        <th scope="col">Gender</th>
        <th scope="col">Email Id</th>
        <th scope="col">DOB</th>
        <th scope="col">Contact No</th>

      </tr>

    </thead>
    <tbody>
      {rows.map((item) => {
        return <tr>
          <td>{item.teacher_id}</td>
          <td>{item.user.first_name}</td>
          <td>{item.user.last_name}</td>
          <td>{item.user.username}</td>
          <td>{item.qualification}</td>
          <td>{item.user.gender}</td>
          <td>{item.user.email}</td>
          <td>{item.user.dob}</td>
          <td>{item.user.contact}</td>
        </tr>

      })}
    </tbody>

  </table>
    </div >
  )

    }
}