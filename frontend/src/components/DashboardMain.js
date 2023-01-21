import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react'

const DashboardMain = () => {
    return (
        <Box>
            <AppBar position="fixed" >
                <Toolbar>
                    <Typography variant='h4'>Teacher Dashboard</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default DashboardMain;