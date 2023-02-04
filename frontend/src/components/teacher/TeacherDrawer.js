import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PeopleIcon from '@mui/icons-material/People';

const TeacherDrawer = (props) => {
  const drawerWidth = 350;
  const navigate = useNavigate();

  const onTabClicked = (key) => {
    if (key === "assignment")
      navigate(key);
    else
      navigate(key);

    props.selectTab();
  }

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => onTabClicked("assignment")}>
              <ListItemIcon>
                <ContentPasteIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 22 }}>Assignments</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => onTabClicked("submission")} >
              <ListItemIcon>
                <FileUploadIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 22 }}>Submissions</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => onTabClicked("student")}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 22 }}>Students</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Drawer>
  )
}

export default TeacherDrawer;