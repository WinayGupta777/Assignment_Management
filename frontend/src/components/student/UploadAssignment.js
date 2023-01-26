import React from 'react';
import { Upload } from '@mui/icons-material';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, TextField } from '@mui/material';
import axios from 'axios';

const UploadAssignment = (props) => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        id: props.row.id,
        subName: '',
        content: '',
        student: 'Vinay Gupta' // This name will be set when Teacher logins
    });

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // code to submit form data to the server
        axios.post("http://localhost:4000/submissions", formData)
            .then((res) => {
                console.log("Data added successfully !!", res);
                handleClose();
            }).catch((err) => console.log);
    }

    return (
        <>
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                {JSON.parse(props.row.status) ?
                    <Button onClick={handleClickOpen}> Upload &nbsp; <Upload /> </Button> :
                    <Button disabled> Upload &nbsp; <Upload /> </Button>}
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ fontSize: 30 }}>Submit Assignment</DialogTitle>
                <Divider />
                <Box component="form" onSubmit={handleSubmit} sx={{ width: '450px' }}>
                    <DialogContent>
                        <Box className="row" >
                            <TextField
                                label="Id"
                                name="id"
                                type="number"
                                defaultValue={props.row.id}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Submission name"
                                name="subName"
                                placeholder='Assignment 1'
                                onChange={handleChange}
                            />
                        </Box>
                        <Box className="row">
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Content"
                                name="content"
                                onChange={handleChange}
                            />
                        </Box>
                        <FormControlLabel control={<Checkbox />} label="Confirm?" name='confirm' />
                    </DialogContent>
                    <Divider />

                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" disableElevation type="submit"
                            sx={{ '&:hover': { color: 'black', backgroundColor: '#ffa500' } }}
                        >Submit</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    )
}

export default UploadAssignment;