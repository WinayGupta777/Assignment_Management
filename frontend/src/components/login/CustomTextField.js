import React from 'react';
import { TextField, Typography } from '@mui/material'

const CustomTextField = (props) => {
  return (
    <>
    <Typography sx={{ fontSize: '20px', fontWeight: 400, mb: 1, mt: 1 }}>{props.myLabel} *</Typography>
    <TextField
        fullWidth
        required
        type={props.type}
        name={props.type} // required
        inputProps={{
            style: { fontFamily: 'Poppins' }
        }}
        onChange={props.onInputChanged}
    />
</>
  )
}

export default CustomTextField;