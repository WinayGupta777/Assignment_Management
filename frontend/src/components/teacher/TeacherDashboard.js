import React from 'react';
import { AppBar, Box, Toolbar, Tooltip, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import TeacherDrawer from './TeacherDrawer';
import EmptyPage from '../EmptyPage';
import { useSelector } from 'react-redux';

const TeacherDashboard = () => {
    const selectedTab = false;
    const currentLoggedUser = useSelector(
        (state) => state.userReducer.userInfo
    );
    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant='h4' sx={{ flexGrow: 1 }}>Teacher Dashboard</Typography>
                    <Tooltip
                        arrow
                        title={
                            <Typography sx={{ fontSize: 15 }}>
                                {currentLoggedUser.email} <br />
                                {currentLoggedUser.role}
                            </Typography>
                        }
                    >
                        <Box sx={{
                            display: 'flex', alignItems: 'center', p: 0.5, cursor: 'pointer',
                            border: '1px solid #575757', backgroundColor: '#474747', borderRadius: 1,
                        }}>
                            <AccountCircle sx={{ fontSize: 40 }} />
                            <Typography sx={{ fontSize: 20, ml: 2, mr: 1 }}>{currentLoggedUser.name}</Typography>
                        </Box>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <TeacherDrawer />

            {selectedTab ? <Outlet /> : <EmptyPage />}
        </Box>
    )
}

export default TeacherDashboard;