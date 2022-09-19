

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './AdminSide/Admin/AdminPage';
import Dashboard from './Components/Dashboard';
import FormUser from './Components/FormUser';
import MyProfile_Student from './Components/MyProfile_Student';
import StudentPage from './Components/StudentPage';
import { TeacherComponent } from './Teacher/TeacherComponent';

import Form from './AdminSide/Form/Form';
import TeacherForm from './AdminSide/Form/TeacherForm';

import Delete from './AdminSide/SideNavComponents/Delete';
import FeedBack from './AdminSide/SideNavComponents/FeedBack';





function App() {
  return (

    <div>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<FormUser />} />
          <Route exact path="/StudentPage" element={<StudentPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/MyProfile"element={<MyProfile_Student />} />
          <Route exact path="/teacher" element={<TeacherComponent />} />
          <Route exact path="/admin" element={<AdminPage/>} />

          <Route path="/addStudentRecords" element={<Form name="Add Student Records" id="Student Class ID" firstField="Student Roll No" />} />
          <Route path="/addTeacherRecords" element={<TeacherForm name="Add Teacher Records" id="Teacher Class ID" firstField="Qualification" />} />
          <Route path="/delete" element={<Delete />} />

          <Route path="/updateStudentRecords" element={<Form name="Update Student Records" id="Student Class ID" firstField="Student Roll No" />} />
          <Route path="/updateTeacherRecords" element={<Form name="Update Teacher Records" id="Teacher Class ID" firstField="Qualification" />} />
          <Route path='/update' element={<Form name="Update Records"/>}/>
          <Route path="/displayStudents" element={<FeedBack api="getStudent"/>} />
          <Route path="/displayTeachers" element={<FeedBack api="getTeacher"/>} />


        </Routes>


      </BrowserRouter>

      <div className="MainContainer">



        {/* <AdminPage/> */}






      </div>




      {/* <FormUser heading="Welcome Back! "/>  */}

      {/* <StudentPage/> */}
    </div>
  );
}

export default App;
