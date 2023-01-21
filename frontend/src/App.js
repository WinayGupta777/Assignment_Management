import "./App.css";
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import LoginPage from "./components/LoginPage";
import DashboardMain from "./components/DashboardMain";

const darkTheme = createTheme({
  palette: { mode: 'dark' }
});
const lightTheme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "100vh" }} square={true}>
        <div className="App">
          <DashboardMain />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;