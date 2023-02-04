import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import StudentDrawer from './StudentDrawer';
import EmptyPage from '../EmptyPage';

const StudentDashboard = () => {
    const selectedTab = true;
    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant='h4' sx={{ flexGrow: 1 }}>Student Dashboard</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center',p: 0.5,
                    border: '1px solid #575757', backgroundColor: '#474747', borderRadius: 1,
                }}>
                        <AccountCircle sx={{ fontSize: 40 }} />
                        <Typography sx={{ fontSize: 20, ml: 2, mr: 1 }}>Vinay Gupta</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <StudentDrawer />

            {selectedTab ? <Outlet /> : <EmptyPage />}
        </Box>
    )
}

export default StudentDashboard;