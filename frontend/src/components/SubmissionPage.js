import React from 'react';
import { Box, Divider, Typography, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material';
import TableData from "../json/SubmissionTableData.json";

const SubmissionPage = () => {
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
                <Typography variant='h3' sx={{ p: 1, pl: 3, fontFamily: 'Poppins' }}>Submissions</Typography>
                <Divider />

                <SubmissionTable />
            </Box>
        </Box>
    )
}

export default SubmissionPage;


const SubmissionTable = () => {
    return (
        <Box
            sx={{ flex: 1, margin: '20px 20px', borderRadius: '5px', backgroundColor: 'black' }}
        >
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {["Id", "Submission name", "Submitted by", "Grades"].map((value, key) => (
                                <TableCell key={key} style={{ fontSize: '25px' }}>{value}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {TableData.map((value, key) => (

                            <TableRow key={key}>
                                <TableCell style={{ width: '5%', fontSize: '20px' }}>{value.Id}</TableCell>
                                <TableCell style={{ width: '15%', fontSize: '20px' }}>{value.SubmissionOf}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.SubmittedBy}</TableCell>
                                <TableCell style={{ width: '30%', fontSize: '20px' }}>{value.Grades}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
};