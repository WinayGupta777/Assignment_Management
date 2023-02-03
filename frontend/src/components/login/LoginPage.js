import "../../css/loginPage.css";
import bgImage from "../../assets/Assignment.png";
import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomTextField from "./CustomTextField";
import CustomSubmitButton from "./CustomSubmitButton";
import axios from "axios";

const LoginPage = () => {
    const [creds, setCreds] = React.useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        setCreds({
            ...creds,
            [event.target.name]: event.target.value
        });
    }

    const onFormSubmitted = async (event) => {
        event.preventDefault();
        // code to send data to server & check for auth
        const res = await axios.get("http://localhost:4000/users");
        if (res.data.some(obj => obj.email === creds.email)) {
            const user = res.data.find(obj => obj.email === creds.email);
            if (user && user.password === creds.password) {
                // success: email exists and password matches
                console.log("Pass matched !");
            } else {
                // failure: password doesn't match
                console.log("Pass Not Matched !");
            }
        } else {
            // failure: email doesn't exist
            console.log("Email not exists !");
        }
    }
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
                    onSubmit={onFormSubmitted}
                >
                    <CustomTextField
                        myLabel='Email'
                        type='email'
                        onInputChanged={(e) => handleInputChange(e)}
                    />
                    <CustomTextField
                        myLabel='Password'
                        type='password'
                        onInputChanged={(e) => handleInputChange(e)}
                    />

                    <CustomSubmitButton text='LOGIN' />
                </Box>
            </Box>
            <Box>
                <img src={bgImage} alt="Tag" height="700px" />
            </Box>
        </Box>

    )
}

export default LoginPage;