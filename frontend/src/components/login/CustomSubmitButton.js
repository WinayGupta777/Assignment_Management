import React from 'react';
import { Button } from '@mui/material';

const CustomSubmitButton = (props) => {
  return (
    <>
    <Button
        type="submit"
        variant="contained"
        size="large"
        disableElevation
        sx={{
            mt: 3, backgroundColor: 'orange', width: '100%',
            '&:hover': { backgroundColor: '#FF8C27' },
            fontSize: '20px'
        }}
    ><b>{props.text}</b></Button>
</>
  )
}

export default CustomSubmitButton;