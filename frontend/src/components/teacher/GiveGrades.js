import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';
import axios from 'axios';

const GiveGrades = (props) => {
    const [open, setOpen] = React.useState(false);
    const [gradeChanged, setGradeChanged] = React.useState(false);
    const [gradeData, setGradeData] = React.useState({
        id: props.row.id,
        subName: '', // will be set, when dialog opened
        grades: '',
        content: '', // will be set, when dialog opened
    });

    React.useEffect(() => {
        const checkgradeChanged = async () => {
            try {
                const res = await axios.get("http://localhost:4000/submissions");
                setGradeChanged(res.data.some(obj => obj.id === props.row.id && obj.grades !== ''));
            } catch (err) {
                console.log(err);
            }
        }
        checkgradeChanged();
    }, [gradeChanged, props.row.id])

    const handleClickOpen = async () => {
        const res = await axios.get('http://localhost:4000/submissions/' + props.row.id);
        setGradeData(res.data);
        setOpen(true);
    };
    const handleClose = () => { setOpen(false); };

    const handleChange = (event) => {
        setGradeData({
            ...gradeData,
            [event.target.name]: event.target.value
        });
    }

    const giveGrades = (event) => {
        event.preventDefault();
        console.log("GIVE -> Grade give", gradeData);
        axios.put(`http://localhost:4000/submissions/${props.row.id}`, gradeData)
            .then((res) => {
                console.log("Grade given successfully !!", res.data);
                handleClose();
                setGradeChanged(!gradeChanged);
            }).catch((err) => console.log);
    }

    return (
        <>
            <Box
                sx={{ display: 'flex', alignItems: 'center' }}
            >
                {gradeChanged ? 
                <>
                    {gradeData.grades || props.row.grades}
                    <IconButton onClick={handleClickOpen}>
                        <Edit />
                    </IconButton>
                </> :
                    <>
                        NA &nbsp;
                        <IconButton onClick={handleClickOpen}>
                            <Edit />
                        </IconButton>
                    </>
                }
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ fontSize: 30 }}>Give Grades</DialogTitle>
                <Divider />

                <Box component="form" onSubmit={giveGrades} >
                    <DialogContent>
                        <Box className="row">
                            <TextField
                                label="Id"
                                name="id"
                                type="number"
                                value={props.row.id}
                            />
                            <TextField
                                label="Grade"
                                name="grades"
                                placeholder='Ex. 7'
                                onChange={(e) => handleChange(e)}
                            />
                        </Box>
                    </DialogContent>
                    <Divider />

                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" disableElevation type="submit"
                            sx={{ '&:hover': { color: 'black', backgroundColor: '#ffa500' } }}
                        >Give</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    )
}

export default GiveGrades;