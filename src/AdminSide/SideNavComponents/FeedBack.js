// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import "./SideNavComponents.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const columns = [
//   { field: "student_id", headerName: "Student ID" },
//   { field: "first_name", headerName: "First name" },
//   { field: "last_name", headerName: "Last name" },
//   { field: "username", headerName: "User Name" },
//   { field: "roll_no", headerName: "Roll No" },
//   { field: "gender", headerName: "Gender" },
//   { field: "email", headerName: "Email Id" },
//   { field: "dob", headerName: "DOB" },
//   { field: "contact", headerName: "Contact No" },
// ];

// export default function DataTable() 
// {


//   const [student, setStudent] = useState([]);
//   const [rows,setRows] = useState([])

  
//   // useEffect(() => {
//   //   rows();
//   // }, []);

//   // const rows = async () => {
    
//   //   const response =await fetch("http://localhost:8080/admin/getStudent")
    
//   //   setStudent(await response.json());
//   //   console.log(student)
//   //   console.log(student[0].student_id+" "+student[0].roll_no+" "+student[0].user.user_id+" ")
//   //   // const data = await axios.get("http://localhost:8080/admin/getStudent")
//   //   // console.log(data)
//   // };

//   useEffect(() => {
//     fetch("http://localhost:8080/admin/getStudent")
//       .then((data) => data.json())
//       .then((data) => console.log(data))
      

//   })
  

//   // console.log(student[0].student_id);
//   // const rows = [
//   //  { student:student[0].student_id }
//   // student.map((s) => (
//   //   {
//   //     student_id: s.student_id,
//   //     first_name:s.first_name
//   //   }
//   // ))

//   // ];
//   return (
//     <div className="centerContainer">
//       <div style={{ height: 400, width: "550%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//         />
//       </div>
//     </div>
//   );
// }








import  * as React from "react";
import "./SideNavComponents.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DataTable()
{
  const [rows,setRows]=useState([])
  const getData = async () =>
  {
      try{
        const data = await axios.get("http://localhost:8080/admin/getStudent")
      console.log(data.data)
      setRows(data.data)
      }
      catch(e){
        console.log(e)
      }
  }
  useEffect(()=> {
    getData()
  },[])

  return(
    <div>
      <table className="table table-bordered" style={{marginLeft:"200px"}}>
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