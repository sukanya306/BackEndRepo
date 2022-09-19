import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import './Navbar.css'
import {Link} from 'react-router-dom'
import FeedbackIcon from '@mui/icons-material/Feedback';



export default function NestedSideBar() {


  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  


  return (

    <div className="Sidebar">



    <List
      sx={{ width: '100%', maxWidth: 400, bgcolor: '#E0E0E0' ,marginTop:'30px' ,height:'700px'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
         
              
         <Divider/>

        <ListItemButton onClick={handleClick}>
                         <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Student" />
                        
                        {
                        open ? <ExpandLess /> : <ExpandMore />
                        }

        </ListItemButton>
                
        <Collapse in={open} timeout="auto" unmountOnExit>


                    <List component="div" disablePadding >

                    <Link   to='/displayStudents' >
                            <span className="displayStudentRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <SlideshowIcon />
                                        </ListItemIcon>
                                    <ListItemText primary="Display Students" />
                            </ListItemButton>
                            </span>        
                    </Link>

                   



                  


                    {/* onClick={alert('clicked')} */}

                    <Link   to='/addStudentRecords' >
                            <span className="addStudentRecords">
                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ListItemIcon>
                                            <AddBoxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Students" />
                                    </ListItemButton>
                            </span>        
                    </Link>


                    <Link   to='/delete' >
                            <span className="deleteStudentRecords">
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <DeleteIcon />
                                        </ListItemIcon>
                                    <ListItemText primary="Delete Students" />
                                </ListItemButton>
                            </span>        
                    </Link>

                    <Link   to='/updateStudentRecords' >
                            <span className="updateStudentRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <UpdateIcon />
                                        </ListItemIcon>
                                     <ListItemText primary="Update Students" />
                            </ListItemButton>
                            </span>        
                    </Link>
                    

                   
                            {/* OPTIONAL  */}

                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FeedbackIcon />
                                </ListItemIcon>
                                <ListItemText primary="FeedBack " />
                            </ListItemButton>

                    

         </List>


        </Collapse>

        <Divider/>

        

        <ListItemButton onClick={handleClick}>
                         <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Teacher" />
                        
                        {
                        open ? <ExpandLess /> : <ExpandMore />
                        }

        </ListItemButton>

        <Divider/>
                
        <Collapse in={open} timeout="auto" unmountOnExit>


                    <List component="div" disablePadding>


                    <Link   to='/displayTeachers' >
                            <span className="displayTeacherRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <SlideshowIcon />
                                        </ListItemIcon>
                                    <ListItemText primary="Display Teacher" />
                            </ListItemButton>
                            </span>        
                    </Link>



                    {/* onClick={alert('clicked')} */}


                    
                    <Link   to='/addTeacherRecords' >
                            <span className="addTeacherRecords">
                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ListItemIcon>
                                            <AddBoxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Teacher" />
                                    </ListItemButton>
                            </span>        
                    </Link>

                   

                    <Link   to='/delete' >
                            <span className="deleteTeacherRecords">
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <DeleteIcon />
                                            </ListItemIcon>
                                        <ListItemText primary="Delete Teacher" />
                                </ListItemButton>
                                    
                            </span>        
                    </Link>
                   

                    <Link   to='/updateTeacherRecords' >
                            <span className="updateTeacherRecords">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <UpdateIcon />
                                        </ListItemIcon>
                                     <ListItemText primary="Update Teachers" />
                            </ListItemButton>
                            </span>        
                    </Link>

                    

                    
                    

                    </List>


        </Collapse>







    </List>





    </div> 

  );
}
