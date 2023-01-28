import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';

const GiveGrades = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => { setOpen(false); };

    return (
        <>
            <Box
                sx={{ display: 'flex', alignItems: 'center' }}
            >
                {props.row.grades !== "" ? props.row.grades :
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

                <Box component="form" onSubmit={() => { }} >
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
                            />
                        </Box>
                    </DialogContent>
                </Box>
                <Divider />

                <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" disableElevation type="submit"
                            sx={{ '&:hover': { color: 'black', backgroundColor: '#ffa500' } }}
                        >Give</Button>
                    </DialogActions>
            </Dialog>
        </>
    )
}

export default GiveGrades;