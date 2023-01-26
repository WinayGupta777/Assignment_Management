import React from 'react';
import { Box, Divider, Typography, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from '@mui/material';
import TableData from "../../json/SubmissionTableData.json";
import axios from 'axios';

const SubmissionPageS = () => {
    const [formData, setFormData] = React.useState([]);

    const getSubmissions = () => {
        axios.get("http://localhost:4000/submissions")
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
                <Typography variant='h3' sx={{ p: 1, pl: 3, fontFamily: 'Poppins' }}>Your Submissions</Typography>
                <Divider />

                <SubmissionTableS
                    getSubmissionData={getSubmissions}
                    fdata={formData}
                />
            </Box>
        </Box>
    )
}

export default SubmissionPageS;


const SubmissionTableS = (props) => {
    const [dataLoaded, setDataLoaded] = React.useState(false);

    React.useEffect(() => {
        if (!dataLoaded) {
            props.getSubmissionData();
            setDataLoaded(true);
        }
    }, [dataLoaded, props]);

    return (
        <Box
            sx={{ flex: 1, margin: '20px 20px', borderRadius: '5px', backgroundColor: 'black' }}
        >
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {["Id", "Submission name", "Content", "Grades", "Actions"].map((value, key) => (
                                <TableCell key={key} style={{ fontSize: '25px' }}>{value}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.fdata.map((value, key) => (

                            <TableRow key={key}>
                                <TableCell style={{ width: '5%', fontSize: '20px' }}>{value.id}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>{value.subName}</TableCell>
                                <TableCell style={{ width: '20%', fontSize: '20px' }}>{value.content}</TableCell>
                                <TableCell style={{ width: '5%', fontSize: '20px' }}>{value.grades}</TableCell>
                                <TableCell style={{ width: '10%', fontSize: '20px' }}>
                                    <Box sx={{ display: 'flex', ml: -1 }} >
                                        <Button>Update</Button>
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