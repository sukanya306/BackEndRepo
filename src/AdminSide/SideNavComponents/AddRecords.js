import React from 'react'
import '../App.css'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


function AddRecords(props) {
  return (

    <div>
  <br/>  
       <h1> {props.name}</h1>

       

<form className='materialForm'>


        <TextField
                id="outlined-basic"
                label="Student ID"
                variant="outlined"
                required

                sx={{

                    width: 500
                    }}

        />
            <br/>
        <TextField
                id="outlined-basic" 
                label="Student Name" 
                variant="outlined" 
        />
        <br/>
       
        <TextField
          
                id="outlined-basic"
                label="Student Class"
                variant="outlined"
                required
        />
            <br/>
        <TextField
                id="outlined-basic" 
                label="Date of Birth" 
                variant="outlined" 
        />
            <br/>
        <TextField
                id="outlined-basic" 
                label="Blood Group" 
                variant="outlined" 
        />
        <br/>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          defaultValue={+91}
        />
                    <br/>

                    <Button  variant="contained" color="success" 
                    sx={{

                        height: 50
                        }}>
                            Submit

                                

                        </Button>

  
</form>



    </div>
  )
}

export default AddRecords