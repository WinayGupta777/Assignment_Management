import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import TeacherDrawer from './TeacherDrawer';
import EmptyPage from '../EmptyPage';

const TeacherDashboard = () => {
    const selectedTab = true;
    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant='h4'>Teacher Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <TeacherDrawer />

            {selectedTab ? <Outlet /> : <EmptyPage />}
        </Box>
    )
}

export default TeacherDashboard;