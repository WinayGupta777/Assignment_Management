import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react'
import DrawerComponent from './DrawerComponent';

const DashboardMain = () => {
    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant='h4'>Teacher Dashboard</Typography>
                </Toolbar>
            </AppBar>

            <DrawerComponent />
        </Box>
    )
}

export default DashboardMain;