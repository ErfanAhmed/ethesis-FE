import { Container, Divider, Typography } from '@mui/material';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [studentProfile, setStudentProfile] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:8080/students/1')
    .then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      setStudentProfile(data);
    })
  }, []);

  return (
    <div className="App">
      <Container>
        <Typography variant='h5'>Student Profile</Typography>
        
        <Divider/>

        <Typography>Student ID: {studentProfile.studentId}</Typography>
        <Typography>First Name: {studentProfile.firstName}</Typography>
        <Typography>Last Name: {studentProfile.lastName}</Typography> 
        <Typography>University: {studentProfile.university.name}</Typography> 
        <Typography>Department: {studentProfile.department.code}</Typography> 
        
        </Container>
    </div>
  );
}

export default App;
