import React from 'react';
import { Box, Divider, Typography, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material';
import axios from 'axios';
import UploadAssignment from './UploadAssignment';

const AssignmentPageS = () => {
    const [formData, setFormData] = React.useState([]);

    const getAssignments = () => {
        axios.get("http://localhost:4000/assignments")
            .then((res) => setFormData(res.data))
            .catch((err) => console.log);
    }



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

                <AssignmentTableS
                    getAssignmentData={getAssignments}
                    fdata={formData}
                />
            </Box>
        </Box>
    )
}

export default AssignmentPageS;

const AssignmentTableS = (props) => {
    const [dataLoaded, setDataLoaded] = React.useState(false);

    React.useEffect(() => {
        if (!dataLoaded) {
            props.getAssignmentData();
            setDataLoaded(true);
        }
    }, [dataLoaded, props]);

    // const onUploadClick = (id) => {
    //     console.log("Upload Clicked: ",id);
    // }
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
                        {props.fdata.map((value, key) => (

                            <TableRow key={key}>
                                <TableCell style={{ width: '5%', fontSize: '20px' }}>{value.id}</TableCell>
                                <TableCell style={{ width: '12%', fontSize: '20px' }}>{value.title}</TableCell>
                                <TableCell style={{ width: '20%', fontSize: '20px' }}>{value.description}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.teacher}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.duedate}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px', color: JSON.parse(value.status) ? '#66FF00' : 'white' }}>
                                    {JSON.parse(value.status) ? "⦿ Active" : "Inactive"}
                                </TableCell>
                                <TableCell style={{ width: '10%' }}>
                                    <UploadAssignment row={value} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
};