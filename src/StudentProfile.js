import { Divider, Typography } from "@mui/material";

const StudentProfile = ({studentProfile}) => {
    return ( 
        <div>
            <Typography variant='h5'>Student Profile</Typography>
            
            <Divider/>

            <Typography>Student ID: {studentProfile?.studentId}</Typography>
            <Typography>First Name: {studentProfile?.firstName}</Typography>
            <Typography>Last Name: {studentProfile?.lastName}</Typography> 
            <Typography>University: {studentProfile?.university.name}</Typography> 
            <Typography>Department: {studentProfile?.department.code}</Typography> 
        </div>
     );
}
 
export default StudentProfile;