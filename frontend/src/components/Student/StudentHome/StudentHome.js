import React,{Component} from 'react';
import CourseAttendance from '../CourseAttendance/CourseAttendance';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Loading from '../../Loading/Loading';

class StudentHome extends Component{
    componentWillMount(){
//        console.log(this.props);
        const roll='';          ////////
        this.props.loadAttendance(roll);
    }
    render(){
//        console.log('attendance',this.props.attendance)
        const attendance=this.props.attendance;
//        console.log(attendance)
        if(attendance!==undefined && attendance.map){
            if(attendance.length===0){
                return(
                    <div className="studentHomeBackground white">
                        <h3 className="ma0">Welcome Student</h3>
                        <h4>No attendance records were found</h4>
                    </div>
                )
            }
            const attendanceArray=attendance.map((a,i)=>{
            let percentage=((a.classesattended/a.totalclasses)*100).toFixed(2)+"%";
            if(a.totalclasses===0){
                percentage="0.00%";
            }
            return <CourseAttendance text1={a.courseid} text2={a.name} text3={a.classesattended} text4={a.totalclasses} text5={percentage} key={i}></CourseAttendance>
            });
            return(
            <div className="studentHomeBackground white">
                <h3 className="ma0">Welcome Student</h3>
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
        else return <Loading></Loading>
        
        
    }
    
}
const mapStateToProps=(state)=>{
    return{
        attendance:state.loadAttendanceReducer.attendance
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