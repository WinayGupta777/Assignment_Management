import React from 'react';
import { Box, Divider, Typography, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button, IconButton, Toolbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableData from "../json/TableData.json";

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
                                <TableCell key={key} style={{ fontSize: '25px' }}>{value}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {TableData.map((value, key) => (

                            <TableRow key={key}>
                                <TableCell style={{ width: '5%', fontSize: '20px' }}>{value.Id}</TableCell>
                                <TableCell style={{ width: '15%', fontSize: '20px' }}>{value.Title}</TableCell>
                                <TableCell style={{ width: '20%', fontSize: '20px' }}>{value.Description}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.DueDate}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px', color: value.Status == "Active" ? 'yellow' : 'red' }}>⦿ {value.Status}</TableCell>
                                <TableCell style={{ width: '10%' }}>
                                    <Box
                                        sx={{
                                            display: 'flex', justifyContent: 'space-between', width: '55%',
                                        }}
                                    >
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                        <Divider orientation='vertical' flexItem />
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
};