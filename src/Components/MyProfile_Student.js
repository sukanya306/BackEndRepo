import React from 'react'
import NavbarComponent from './NavbarComponent'
import SideBarIcons from './SideBarIcons'
import StudentPage from './StudentPage'
function MyProfile_Student() {

    return (
        <div>
            <NavbarComponent />
            <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }} className="main">

                <div className="sidebar">
                    <SideBarIcons />
                </div>
            </div>

        </div>
    )
}

export default MyProfile_Student
