import React,{Component} from 'react';
import StudentCard from '../StudentCard/StudentCard';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Grid from '@material-ui/core/Grid';
import Loading from '../../Loading/Loading';

class ViewAttendance extends Component{
    componentWillMount(){
        this.props.loadStudentList(this.props.match.params.courseid,this.props.match.params.classid);
    }
    
    render(){
//        console.log(this.props.match.params);
        const studentList=this.props.studentList;
        
//        console.log(studentList);
        if(studentList && studentList.map){
            const studentArray=studentList.map((s,i)=>{
                let percentage=0+"%";
                if(s.totalclasses!==0)
                    percentage=((s.classesattended/s.totalclasses)*100).toFixed(2)+"%"
                return <StudentCard text1={s.roll} text2={s.name} text3 ={s.classesattended} text4={s.totalclasses} text5={percentage} key={i} mode="view"></StudentCard>
            })
//            console.log(studentArray);
            return(
                <div className="libraryBackground white">
                    <h3 className="ma0">Enter Attendance</h3>
                    <br/>
                    <Grid container spacing={1}>
                        <StudentCard text1="Roll" text2="Name" text3="Classes Present" text4="Total Classes" text5="%" mode="view"></StudentCard>
                        {studentArray}
                    </Grid>
                </div>
            );
        }
        else return <Loading></Loading>
        
        
    }
}
const mapStateToProps=(state)=>{
//    console.log(state);
    return{
        studentList:state.loadStudentListReducer.studentList
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadStudentList:(courseid,classid)=>{
            dispatch(actions.loadStudentList(courseid,classid));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewAttendance);