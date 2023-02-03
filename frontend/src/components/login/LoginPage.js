import "../../css/loginPage.css";
import React from 'react';
import { Alert, Box, Snackbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomTextField from "./CustomTextField";
import CustomSubmitButton from "./CustomSubmitButton";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const [openSnack, setOpenSnack] = React.useState(false);
    const [messageSnack, setMessageSnack] = React.useState("");
    const [dynamicSeverity, setDynamicSeverity] = React.useState("success");
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
                setMessageSnack("Pass Matched!");
                setDynamicSeverity("success");
                setOpenSnack(true);

                setTimeout(() => {
                    user.role === "teacher" ?
                        navigate("/teacher")
                        : navigate("/student");
                }, 1000);

            } else {
                setMessageSnack("Incorrect password!");
                setDynamicSeverity("warning");
                setOpenSnack(true);
            }
        } else {
            setMessageSnack("Email doesn't exists!");
            setDynamicSeverity("error");
            setOpenSnack(true);
        }
    }

    return (
        <Box
            sx={{
                height: '100vh', display: 'flex',
                justifyContent: 'center', alignItems: 'center'
            }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                <Typography className="gradient-text" sx={{ fontSize: '58px', fontWeight: '600', fontFamily: 'Poppins' }}>Welcome back!</Typography>
                <Typography sx={{ fontSize: '28px', fontFamily: 'Poppins' }}>Login to access your account.</Typography>

                <Box
                    component="form"
                    autoComplete="off"
                    sx={{ display: 'flex', flexDirection: 'column', width: '400px', mt: 8 }}
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


                    <Snackbar
                        open={openSnack}
                        autoHideDuration={6000}
                        onClose={() => setOpenSnack(false)}
                        sx={{ transform: 'scale(1.4)', ml: 5, mb: 2 }}
                    >
                        <Alert severity={dynamicSeverity} variant="outlined" >
                            {messageSnack}
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
            
        </Box>

    )
}

export default LoginPage;