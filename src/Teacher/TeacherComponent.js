import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import SideBarIcons from '../Components/SideBarIcons'

export function TeacherComponent() {
  return (
    <div>
      <NavbarComponent/>
            <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }} className="main">

                <div className="sidebar">
                    <SideBarIcons/>
                </div>
            </div>
    </div>
  )
}


