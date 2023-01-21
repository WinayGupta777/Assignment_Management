import { Box, Divider, Typography } from '@mui/material';
import React from 'react'

const AssignmentPage = () => {
    const drawerSpace = "350px";
    const AppbarSpace = "64px";
    return (
        <Box
            component="main"
            sx={{
                ml: drawerSpace, pt: AppbarSpace,
                height: `calc(100vh - ${AppbarSpace})`,
            }}
        >
            <Box
                sx={{
                    mt: 3, ml: 3, mr: 3, height: `calc(95vh - ${AppbarSpace})`,
                    backgroundColor: '#272727', borderRadius: 2
                }}
            >
                <Typography variant='h3' sx={{ p: 1, pl: 3, fontFamily: 'Poppins' }}>Assignments</Typography>
                <Divider />
            </Box>
        </Box>
    )
}

export default AssignmentPage;