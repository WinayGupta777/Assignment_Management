import React from 'react';
import { Box, Divider, Typography, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import CreateAssignment from './CreateAssignment';
import axios from 'axios';


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
                    mt: 3, ml: 3, mr: 3,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    height: `calc(95vh - ${AppbarSpace})`,
                    backgroundColor: '#272727', borderRadius: 2
                }}
            >
                {/* Title - Divider - Table */}
                <Box>
                    <Typography variant='h3' sx={{ p: 1, pl: 3, fontFamily: 'Poppins' }}>Assignments</Typography>
                    <Divider />

                    <AssignmentTable />
                </Box>

                {/* Button */}
                <CreateAssignment />

            </Box>
        </Box>
    )
}

export default AssignmentPage;

const AssignmentTable = () => {
    const [formData, setFormData] = React.useState([]);


    const getAssignments = () => {
        axios.get("http://localhost:4000/assignments")
            .then((res) => {
                console.log("GET: ", res.data);
                setFormData(res.data);
            })
            .catch((err) => console.log);
    }


    React.useEffect(() => {
        getAssignments();
    }, []);



    return (
        <Box
            sx={{ flex: 1, margin: '20px 20px', borderRadius: '5px', backgroundColor: 'black' }}
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
                        {formData.map((value, key) => (

                            <TableRow key={key}>
                                <TableCell style={{ width: '5%', fontSize: '20px' }}>{value.id}</TableCell>
                                <TableCell style={{ width: '15%', fontSize: '20px' }}>{value.title}</TableCell>
                                <TableCell style={{ width: '20%', fontSize: '20px' }}>{value.description}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.duedate}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px', color: value.status ? '#66FF00' : 'white' }}>
                                    {value.status ? "⦿ Active" : "Inactive"}
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>
                                    <Box
                                        sx={{
                                            display: 'flex', justifyContent: 'space-between', width: '55%',
                                        }}
                                    >
                                        <IconButton >
                                            <Edit />
                                        </IconButton>
                                        <Divider orientation='vertical' flexItem />
                                        <IconButton color='error'>
                                            <Delete />
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