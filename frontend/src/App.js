import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Paper, createTheme } from '@mui/material';
import LoginPage from "./components/LoginPage";
import TeacherDashboard from "./components/teacher/TeacherDashboard";
import StudentPage from "./components/teacher/StudentPage";
import SubmissionPage from "./components/teacher/SubmissionPage";
import AssignmentPage from "./components/teacher/AssignmentPage";

const darkTheme = createTheme({
  palette: { mode: 'dark' }
});
// const lightTheme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "100vh" }} square={true}>
        <div className="App">

          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/teacher" element={<TeacherDashboard />} >
                <Route path="assignment" element={<AssignmentPage />} />
                <Route path="submission" element={<SubmissionPage />} />
                <Route path="student" element={<StudentPage />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;