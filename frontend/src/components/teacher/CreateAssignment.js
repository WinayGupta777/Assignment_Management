import "../../css/createAssignmentDialog.css";
import React from 'react';
import { AddBox } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import axios from "axios";

const CreateAssignment = (props) => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        title: '',
        description: '',
        duedate: new Date().toISOString().substr(0, 10),
        status: 'true'
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
        axios.post("http://localhost:4000/assignments", formData)
            .then((res) => {
                console.log("Data added successfully !!");
                props.getAssignmentData();
                handleClose();
            }).catch((err) => console.log);
    }

    return (
        <>
            <Box sx={{ marginBottom: 5, display: 'flex', justifyContent: 'center' }} >

                {/* Button */}
                <Button variant='outlined'
                    startIcon={<AddBox sx={{ height: 35, width: 35 }} />}
                    sx={{ '&:hover': { color: '#ffa500', borderColor: '#ffa500' } }}
                    onClick={handleClickOpen}
                >
                    Create Assignment
                </Button>

                {/* Onclick - Dialog */}
                <Dialog open={open} onClose={handleClose}   >
                    <DialogTitle sx={{ fontSize: 30 }}>Create Assignment</DialogTitle>
                    <Divider />
                    <Box component="form" onSubmit={handleSubmit} sx={{ width: '500px' }}>
                        <DialogContent>
                            <Box className="row" >
                                <TextField
                                    label="Title"
                                    name="title"
                                    placeholder='Assignment 1'
                                    className='textfield'
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Due date"
                                    name="duedate"
                                    type="date"
                                    className='textfield'
                                    defaultValue={new Date().toISOString().substr(0, 10)}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box className="row">
                                <TextField
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    placeholder='This is ...'
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <FormLabel sx={{ fontSize: 20, mr: 2 }}>Status: </FormLabel>
                                <RadioGroup row defaultValue={true} onChange={handleChange} >
                                    <FormControlLabel name="status" value={true} control={<Radio sx={{ '&.Mui-checked': { color: 'orange' } }} />} label="Active" />
                                    <FormControlLabel name="status" value={false} control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </Box>
                        </DialogContent>
                        <Divider />

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button variant="contained" disableElevation type="submit"
                                sx={{ '&:hover': { color: 'black', backgroundColor: '#ffa500' } }}
                                onClick={() => { }}
                            >Create</Button>
                        </DialogActions>
                    </Box>

                </Dialog>
            </Box >
        </>
    )
}

export default CreateAssignment;