import React from 'react'
import NavbarComponent from './NavbarComponent'
import SideBarIcons from './SideBarIcons'
import './StudentPage.css'
// import data from './Manual_data/Sidebar_data'
import CardComponent from './CardComponent'
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function StudentPage() {

  return (
    <div>
      {/* <BrowserRouter> */}
        <NavbarComponent />

        <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }} className="main">

          <div className="sidebar">

            <SideBarIcons />
            {/* {items.map((item,index) => <SideBarIcons key={index} item={item}/>)} */}
            {/* <Routes>
              <Route exact path="/" element={<FormUser />} />
              <Route exact path="/StudentPage" element={<StudentPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes > */}


          </div>

          <div className='container'>
            <CardComponent />
          </div>
        </div>
      {/* </BrowserRouter> */}
    </div>
  )
}


export default StudentPage
