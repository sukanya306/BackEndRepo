import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function NavbarComponent()  {

  const navigate = useNavigate()
  const navigate1= useNavigate()
  
 
  
    return (
      <div>
        <Navbar style={{ background: "rgb(69, 69, 145)", color: "white" }} expand="md">
          <div style={{fontSize:"20px", fontWeight:"bold"}}>Welcome Sukanya</div>
          
          <Nav className='ms-auto' >
            <Button onClick={()=>{navigate1('/MyProfile')}} style={{background:"none", marginRight:"15px", border:"none",boxShadow:"none"}}>My Profile</Button>
            <Button onClick={()=>{navigate(-1)}} style={{color:"white", background:"red"}}> LogOut</Button>
              
           
          </Nav>

        </Navbar>
      </div>
    )
  }



