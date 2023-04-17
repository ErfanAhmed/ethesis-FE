import { Container, Typography } from '@mui/material';
import './App.css';
import { useState, useEffect } from 'react';
import StudentProfile from './StudentProfile';

function App() {

  const [studentProfile, setStudentProfile] = useState(); 

  useEffect(() => {
    fetch('http://localhost:8080/students/1')
    .then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      setStudentProfile(data);
    }).catch(err => {
      console.log(err.message);
    })
  }, []);

  return (
    <div className="App">
      <Container>
        <Typography variant='h5' gutterBottom={true}>E-Thesis</Typography>
        <StudentProfile studentProfile={studentProfile}/>
      </Container>
    </div>
  );
}

export default App;
