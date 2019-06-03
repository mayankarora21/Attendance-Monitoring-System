import React,{Component} from 'react';
import CourseAttendance from '../CourseAttendance/CourseAttendance';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';
import LoginFirst from '../../LoginFirst/LoginFirst';

class StudentHome extends Component{
    componentWillMount(){
//        console.log(this.props);
        if(this.props.isStudentLoggedIn){
            const roll=this.props.currStudent.roll;
            this.props.loadAttendance(roll);
        }
    }
    
    render(){
        
        if(!this.props.isStudentLoggedIn){
            return <LoginFirst></LoginFirst>
        }
        else{
//          console.log('attendance',this.props.attendance)
//          console.log('student name',this.props.currStudent.name.toUpperCase())
            const attendance=this.props.attendance;
//          console.log(attendance)
            if(attendance!==undefined && attendance.map){
                if(attendance.length===0){
                    return(
                        <div className="studentHomeBackground white">
                            <h3 className="ma0">Welcome {this.props.currStudent.name.toUpperCase()}</h3>
                            <h4>No attendance records were found</h4>
                        </div>
                    )
                }
                else{
                    const attendanceArray=attendance.map((a,i)=>{
                    let percentage=((a.classesattended/a.totalclasses)*100).toFixed(2);
                    if(a.totalclasses===0){
                        percentage="0.00";
                    }
//                    console.log('calculated %',percentage)
                    const minAttendance=75;
                    const classesToAttend=Math.ceil( ( (minAttendance*a.totalclasses) - (a.classesattended*100) ) / (100 - minAttendance) );
                    const classesToMiss=Math.floor( ( ( 100 * a.classesattended) / minAttendance ) - a.totalclasses );
//                    console.log('classes to attend',classesToAttend,"classes to miss",classesToMiss)
                    return <CourseAttendance text1={a.courseid} text2={a.name} text3={a.classesattended} text4={a.totalclasses} text5={percentage} key={i} classesToAttend={classesToAttend} classesToMiss={classesToMiss}></CourseAttendance>
                    });

                    return(
                        <div className="studentHomeBackground white">
                            <h3 className="ma0">Welcome {this.props.currStudent.name.toUpperCase()}</h3>
                            <h4>Your Attendance</h4>
                            <Grid container spacing={2}>
                                <CourseAttendance text1="Course ID" text2="Course Name" text3="Classes Present" text4="Total Classes" text5="%"></CourseAttendance>
                                <Grid item xs={12}>
                                    <hr></hr>
                                </Grid>
                                {attendanceArray}
                            </Grid>

                        </div>
                    )
                }
                
            }
            else return <Loading></Loading>
        }

        
        
    }
    
}
const mapStateToProps=(state)=>{
    return{
        attendance:state.loadAttendanceReducer.attendance,
        isStudentLoggedIn:state.loginStudentReducer.isStudentLoggedIn,
        currStudent:state.loadStudentReducer.currStudent
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadAttendance:(roll)=>{
            dispatch(actions.loadAttendance(roll))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StudentHome);