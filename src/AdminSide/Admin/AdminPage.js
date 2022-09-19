import React from 'react'
import TopNavBar from '../NavBars/TopNavBar'
import Sidebar from '../NavBars/Sidebar';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import Form from '../Form/Form';
import './AdminPage.css'


import Delete from '../SideNavComponents/Delete';
import FeedBack from '../SideNavComponents/FeedBack';


import NestedSideBar from '../NavBars/NestedSideBar'



function AdminPage() {
  const feedbackstyle = {
    marginLeft: "600px"
  }
  return (
            <div className='MainContainerAdminHomePage'>

            {/* <BrowserRouter> */}
             
             

             <div className="topBar" >
                   <TopNavBar/>
                   
             </div>
        

              <div className="sideBar" >
                      <NestedSideBar/>
              </div>

            {/* <div className="center">


            <Routes>
                          <Route path="/addStudentRecords" element={<Form name="Add Student Records" id="Student Class ID" firstField="Student Roll No"/>}/>
                          <Route path="/addTeacherRecords" element={<Form name="Add Teacher Records" id="Teacher Class ID" firstField="Qualification"/>}/>
                          <Route path='/delete' element={<Delete/>}/>

                          <Route path="/updateStudentRecords" element={<Form name="Update Student Records" id="Student Class ID" firstField="Student Roll No"/>}/>
                          <Route path="/updateTeacherRecords" element={<Form name="Update Teacher Records" id="Teacher Class ID" firstField="Qualification"/>}/>
                           <Route path='/update' element={<Form name="Update Records"/>}/>
                          <Route path='/display' style={feedbackstyle} element={<FeedBack />}/>
                          


             </Routes>  

            </div>


           </BrowserRouter> */}

    </div>
       
     



  )
}

export default AdminPage
