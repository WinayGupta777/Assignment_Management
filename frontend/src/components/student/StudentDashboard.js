import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import StudentDrawer from './StudentDrawer';
import EmptyPage from '../EmptyPage';

const StudentDashboard = () => {
    const selectedTab = true;
    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant='h4'>Student Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <StudentDrawer />

            {selectedTab ? <Outlet /> : <EmptyPage />}
        </Box>
    )
}

export default StudentDashboard;