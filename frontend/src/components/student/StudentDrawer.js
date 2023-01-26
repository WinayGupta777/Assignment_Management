import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const StudentDrawer = () => {
  const drawerWidth = 350;
  const navigate = useNavigate();

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
            <ListItemButton onClick={() => navigate("assignment")}>
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
            <ListItemButton onClick={() => navigate("submission")} >
              <ListItemIcon>
                <FileUploadIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 22 }}>Submissions</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Drawer>
  )
}

export default StudentDrawer;