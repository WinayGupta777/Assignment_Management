import React from 'react';
import { Box, Divider, Typography, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button, IconButton, Toolbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

                <AssignmentTable />
            </Box>
        </Box>
    )
}

export default AssignmentPage;

const AssignmentTable = () => {
    return (
        <Box
            sx={{ flex: 1, mt: 2, backgroundColor: 'black' }}
        >
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {["Id", "Title", "Description", "Due Date", "Status", "Actions"].map((value, key) => (
                                <TableCell key={key} style={{ fontSize: '20px' }}>{value}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell style={{ width: '5%' }}>1</TableCell>
                            <TableCell style={{ width: '15%' }}>Assignment 1</TableCell>
                            <TableCell style={{ width: '20%' }}>This is ....</TableCell>
                            <TableCell style={{ width: '10%' }}>20-01-2023</TableCell>
                            <TableCell style={{ width: '10%' }}>Inactive</TableCell>
                            <TableCell style={{ width: '10%' }}>
                                <Box
                                    sx={{
                                        display: 'flex', justifyContent: 'space-between', width: '55%',
                                    }}
                                >
                                    <IconButton edge={false}>
                                        <EditIcon />
                                    </IconButton>
                                    <Divider orientation='vertical' flexItem />
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
};