import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './SideNavComponents.css';

import SearchIcon from '@mui/icons-material/Search';

function Delete() {


 
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
  









  return (
    <div className='Delete'>
            <h1>Delete Records </h1>




          <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
            label="Delete"
          />
        </FormControl>









        </div>
  )
}

export default Delete
