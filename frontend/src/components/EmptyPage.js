import React from 'react';
import { Box } from '@mui/material';
import PlaceholderImg from "../assets/HomePic.png";

const EmptyPage = () => {
    const drawerSpace = "350px";
    const AppbarSpace = "64px";
    return (
        <Box
            component="main"
            sx={{
                ml: drawerSpace, pt: AppbarSpace,
                height: `calc(100vh - ${AppbarSpace})`,
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
        >
            <img src={PlaceholderImg} alt="Nothing" height="500px" />
        </Box>
    )
};

export default EmptyPage;