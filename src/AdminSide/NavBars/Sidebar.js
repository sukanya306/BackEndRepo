import React from 'react'
import { SidebarData } from './SidebarData'; 
import Form from '../Form/Form';
//  import '../NavBars/Navbar.css'
 import { NavLink  } from 'react-router-dom'
 import {Link} from 'react-router-dom'
import '../../App.css'
 import './Navbar.css'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'>

       <Link style={{textDecoration:'none'}}  to='/addRecords' >
                <span className="addElement">
                    
                    <div className="addIcon">
                         {SidebarData.data[0].icon}  

                    </div>

                    <div className="addTitle">
                    { SidebarData.data[0].title }

                    </div>
                    
                </span>
       </Link > 
       <br/>
       <br/>



       <Link  style={{textDecoration:'none'}} to='/delete' >
                <span className="deleteElement">

                    <div className="deleteIcon">
                    { SidebarData.data[1].icon  }
                    </div>

                    <div className="deleteTitle">
                    { SidebarData.data[1].title }
                    </div>



                </span>
       </Link > 
       <br/>
       <br/>


       <Link style={{textDecoration:'none'}} to='/update' >
                <span className="updateElement">

                <div className="updateIcon">
                    { SidebarData.data[2].icon  }
                    </div>

                    <div className="updateTitle">
                    { SidebarData.data[2].title }
                    </div>



                </span>
       </Link > 
       <br/>
       <br/>

        
       <Link style={{textDecoration:'none'}} to='/timetable' >
                <span className="timeTableElement">
               
                  <div className="timeTableIcon">
                    { SidebarData.data[3].icon  }
                    </div>

                    <div className="timeTableTitle">
                    { SidebarData.data[3].title }
                    </div>


                </span>
       </Link > 
       <br/>
       <br/>


       <Link style={{textDecoration:'none'}}  to='/feesstatus' >
                <span className="feesElement">

                <div className="timeTableIcon">
                        { SidebarData.data[4].icon  }
                </div>

                <div className="timeTableTitle">
                         { SidebarData.data[4].title }
                </div>

                </span>
       </Link > 
       <br/>
       <br/>


       <Link style={{textDecoration:'none'}} to='/feedback' >
                <span className="feedbackElement">

                <div className="feedbackIcon">
                { SidebarData.data[5].icon  }
                </div>

                <div className="feedbackTitle">
                { SidebarData.data[5].title }
                </div>

                </span>
       </Link > 
       <br/>
       <br/>
      


            

          

        </ul>
       
    
    </div>
  );
}

export default Sidebar