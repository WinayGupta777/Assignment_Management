import "../../css/loginPage.css";
import bgImage from "../../assets/Assignment.png";
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomTextField from "./CustomTextField";

const LoginPage = () => {
    return (
        <Box
            sx={{
                height: '100vh', display: 'flex', paddingLeft: 30,
                justifyContent: 'space-around', alignItems: 'center'
            }}
        >
            <Box>
                <Typography className="gradient-text" sx={{ fontSize: '58px', fontWeight: '600', fontFamily: 'Poppins' }}>Welcome back!</Typography>
                <Typography sx={{ fontSize: '28px', fontFamily: 'Poppins' }}>Login to access your account.</Typography>

                <Box
                    component="form"
                    autoComplete="off"
                    sx={{ display: 'flex', flexDirection: 'column', width: '400px', mt: 10 }}
                >
                    <CustomTextField myLabel='Email' type='text' />
                    <CustomTextField myLabel='Password' type='password' />

                    <MySubmitButton text='LOGIN' />
                </Box>
            </Box>
            <Box>
                <img src={bgImage} alt="Tag" height="700px" />
            </Box>
        </Box>

    )
}

export default LoginPage;


const MySubmitButton = (props) => {
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
};