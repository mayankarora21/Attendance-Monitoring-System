import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Home=()=>{
    return(
        <div className="homeBackground white">
            <h3 className="ma0">Welcome to Attendance Monitoring System</h3>
            <p>This app allows the teachers to take attendance online and helps the students to monitor their attendance</p>
            <br/><br/>
            <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                    <Link to="/studentlogin" className="noUnderline">
                        <Button variant="contained" color="secondary">Student Login</Button>
                    </Link>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Link to="/facultylogin" className="noUnderline">
                        <Button variant="contained" color="secondary">Faculty Login</Button>
                    </Link>    
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;