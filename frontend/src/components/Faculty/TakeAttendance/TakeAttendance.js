import React,{Component} from 'react';
import StudentCard from '../StudentCard/StudentCard';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Loading from '../../Loading/Loading';

class TakeAttendance extends Component{
    componentWillMount(){
        this.props.loadStudentList(this.props.match.params.courseid,this.props.match.params.classid);
    }
    
    submitAttendance=(studentList)=>{
        let numPresent=0;
//        console.log(studentList);
        studentList.forEach((s,i)=>{
            const checkBox=document.getElementById(`${s.roll}`);
//            console.log(checkBox.checked)
            if(checkBox.checked===true){
                s.isPresent=true;
                numPresent++;
            }
            else{
                s.isPresent=false;
            }
        })
//        console.log(studentList)
        const object={
            studentList:studentList,
            courseid:this.props.match.params.courseid
        }
        fetch('http://localhost:3000/enterattendance',{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            if(data==='attendance entered'){
                window.alert(`Attendace was successfully entered. ${numPresent} students are present`);
            }
            else{
                window.alert('Attendace could not be entered')
            }
        });
    }
    render(){
//        console.log(this.props.match.params);
        const studentList=this.props.studentList;
        
//        console.log(studentList);
        if(studentList && studentList.map){
            const studentArray=studentList.map((s,i)=>{
                return <StudentCard text1={s.roll} text2={s.name} key={i}></StudentCard>
            })
//            console.log(studentArray);
            return(
                <div className="libraryBackground white">
                    <h3 className="ma0">Enter Attendance</h3>
                    <br/>
                    <Grid container spacing={2}>
                        <StudentCard text1="Roll" text2="Name" text3="Present"></StudentCard>
                        {studentArray}
                    </Grid>
                    <Button variant="contained" color="secondary" onClick={()=>{this.submitAttendance(studentList)}}>
                        Submit Attendance
                    </Button>
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
export default connect(mapStateToProps,mapDispatchToProps)(TakeAttendance);