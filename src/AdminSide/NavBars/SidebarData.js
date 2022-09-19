import React from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PaidIcon from '@mui/icons-material/Paid';
import SlideshowIcon from '@mui/icons-material/Slideshow';

export const SidebarData ={
      data:  [

    {
        title:"Add Record",
        icon:<AddIcon/>,
    },
    {

        title:"Delete Record",
        icon:<DeleteOutlineIcon/>,
    },
    {
        title:"Update Record",
        icon:<UpdateIcon/>,
    },
    {

        title:"Time Table",
        icon:<CalendarMonthIcon/>,
    }, {

        title:"Fees Status",
        icon:<PaidIcon/>,
    }, {

        title:"Show Records",
        icon:<FeedbackIcon/>,
    }

]  };


