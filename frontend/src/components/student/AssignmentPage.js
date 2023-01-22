import React from 'react';
import { Box, Divider, Typography, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from '@mui/material';
import { Upload } from '@mui/icons-material';
import TableData from "../../json/TableData.json";

const AssignmentPageS = () => {
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

                <AssignmentTableS />
            </Box>
        </Box>
    )
}

export default AssignmentPageS;

const AssignmentTableS = () => {
    return (
        <Box
            sx={{ flex: 1, margin: '20px 20px', borderRadius: '5px', backgroundColor: 'black' }}
        >
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {["Id", "Title", "Description", "Teacher", "Due Date", "Status", "Actions"].map((value, key) => (
                                <TableCell key={key} style={{ fontSize: '25px' }}>{value}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {TableData.map((value, key) => (

                            <TableRow key={key}>
                                <TableCell style={{ width: '5%', fontSize: '20px' }}>{value.Id}</TableCell>
                                <TableCell style={{ width: '15%', fontSize: '20px' }}>{value.Title}</TableCell>
                                <TableCell style={{ width: '15%', fontSize: '20px' }}>{value.Description}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.Teacher}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.DueDate}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px', color: value.Status === "Active" ? 'yellow' : 'red' }}>⦿ {value.Status}</TableCell>
                                <TableCell style={{ width: '10%' }}>
                                    <Box
                                        sx={{
                                            display: 'flex', justifyContent: 'space-between'
                                        }}
                                    >
                                        {value.Status === "Active" ?
                                            <Button> Upload &nbsp; <Upload /> </Button> :
                                            <Button disabled> Upload &nbsp; <Upload /> </Button>}
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