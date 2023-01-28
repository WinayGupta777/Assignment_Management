import React, { useEffect } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, TextField } from '@mui/material';
import { Edit, Upload } from '@mui/icons-material';
import axios from 'axios';

const UploadAssignment = (props) => {
    const [open, setOpen] = React.useState(false);
    const [submissionDone, setSubmissionDone] = React.useState(false);
    const [formData, setFormData] = React.useState({
        id: props.row.id,
        subName: '',
        grades: '',
        content: '',
        doneBy: 'Vinay Gupta' // This name will be set when Student logins
    });
    const [editedFormData, setEditedFormData] = React.useState({
        id: props.row.id,
        subName: '',
        grades: '',
        content: '',
    });

    const handleClickOpen = async (button) => {
        if (button === "edit") {
            const res = await axios.get('http://localhost:4000/submissions/' + props.row.id);
            setEditedFormData(res.data);
            console.log("On edit:", res.data);
        }
        setOpen(true);
    };
    const handleClose = () => { setOpen(false); };

    const handleChange = (event, isFor) => {
        if (isFor === "edit") {
            setEditedFormData({
                ...editedFormData,
                [event.target.name]: event.target.value
            })
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("SUBMIT -> Upload button", formData);
        // code to submit form data to the server
        axios.post("http://localhost:4000/submissions", formData)
            .then((res) => {
                console.log("Data added successfully !!", res);
                handleClose();
                setSubmissionDone(true);
            }).catch((err) => console.log);
    }

    const handleEditedSubmit = (event) => {
        event.preventDefault();
        console.log("SUBMIT -> Edit button:", editedFormData);
        // code to submit form data to the server
        axios.put(`http://localhost:4000/submissions/${props.row.id}`, editedFormData)
            .then((res) => {
                console.log("Data edited successfully !!", res.data);
                handleClose();
            }).catch((err) => console.log);
    }


    useEffect(() => {
        const checkSubmission = async () => {
            try {
                const res = await axios.get("http://localhost:4000/submissions");
                if (res.data.some(obj => obj.id === props.row.id)) {
                    setSubmissionDone(true);
                } else {
                    setSubmissionDone(false);
                }
            } catch (err) {
                console.log(err);
            }
        }
        checkSubmission();
    }, [submissionDone ,props.row.id])


    return (
        <>
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                {JSON.parse(props.row.status) ?
                    (submissionDone ?
                        <Button onClick={() => handleClickOpen("edit")}> Edit &nbsp; <Edit /> </Button> :
                        <Button onClick={() => handleClickOpen("upload")}> Upload &nbsp; <Upload /> </Button>
                    ) :
                    <Button disabled> Upload &nbsp; <Upload /> </Button>}
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ fontSize: 30 }}>Submit Assignment</DialogTitle>
                <Divider />
                <Box component="form" onSubmit={submissionDone ? handleEditedSubmit : handleSubmit} sx={{ width: '450px' }}>
                    <DialogContent>
                        <Box className="row" >
                            <TextField
                                label="Id"
                                name="id"
                                type="number"
                                value={props.row.id}
                                onChange={submissionDone ? (e) => handleChange(e,"edit") : (e) => handleChange(e,"upload")}
                            />
                            <TextField
                                label="Submission name"
                                name="subName"
                                placeholder='Assignment 1'
                                defaultValue={submissionDone ? editedFormData.subName : null}
                                onChange={submissionDone ? (e) => handleChange(e,"edit") : (e) => handleChange(e,"upload")}
                            />
                        </Box>
                        <Box className="row">
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Content"
                                name="content"
                                defaultValue={submissionDone ? editedFormData.content : null}
                                onChange={submissionDone ? (e) => handleChange(e,"edit") : (e) => handleChange(e,"upload")}
                            />
                        </Box>
                        <FormControlLabel control={<Checkbox />} label="Confirm?" name='confirm' />
                    </DialogContent>
                    <Divider />

                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" disableElevation type="submit"
                            sx={{ '&:hover': { color: 'black', backgroundColor: '#ffa500' } }}
                        >{submissionDone ? "Edit" : "Upload"}</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    )
}

export default UploadAssignment;