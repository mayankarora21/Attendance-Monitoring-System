import React,{Component} from 'react';
import StudentCard from '../StudentCard/StudentCard';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Loading from '../../Loading/Loading';

class UpdateAttendance extends Component{
    componentWillMount(){
        this.props.loadStudentList(this.props.match.params.courseid,this.props.match.params.classid);
    }
    
    updateAttendance=(studentList)=>{
        let numPresent=0;
        let isUpdated=false;
//        console.log(studentList);
        let isWrongAttendance=false;
        studentList.forEach((s,i)=>{
            const textBox=document.getElementById(`update${s.roll}`);
//            console.log(checkBox.checked)
            if(textBox.value!==''){
                if(textBox.value>s.totalclasses){
                    window.alert('Classes attended can not be greater than total classes');
                    isWrongAttendance=true;
                    textBox.value='';
                    return;
                }
                isUpdated=true;
                s.classesattended=textBox.value;
                numPresent++;
                textBox.value='';
            }
        })
        if(isWrongAttendance){
            return;
        }
        if(isUpdated===false){
            window.alert('No attendance was updated');
            return;
        }
//        console.log(studentList)
        const object={
            studentList:studentList,
            courseid:this.props.match.params.courseid
        }
        fetch('http://localhost:3000/updateattendance',{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            if(data==='attendance updated'){
                window.alert(`Attendace was successfully update. ${numPresent} students are updated`);
                this.props.loadStudentList(this.props.match.params.courseid,this.props.match.params.classid);
            }
            else{
                window.alert('Attendace could not be updated')
            }
        });
    }
    render(){
//        console.log(this.props.match.params);
        const studentList=this.props.studentList;
        
//        console.log(studentList);
        if(studentList && studentList.map){
            const studentArray=studentList.map((s,i)=>{
                return <StudentCard text1={s.roll} text2={s.name} mode="update" text3={s.classesattended} text4={s.totalclasses} key={i}></StudentCard>
            })
//            console.log(studentArray);
            return(
                <div className="libraryBackground white">
                    <h3 className="ma0">Update Attendance</h3>
                    <br/>
                    <Grid container spacing={2}>
                        <StudentCard text1="Roll" text2="Name" text3="Classes Present" text4="Total Classes" mode="update"></StudentCard>
                        {studentArray}
                    </Grid>
                    <Button variant="contained" color="secondary" onClick={()=>{this.updateAttendance(studentList)}}>
                        Update Attendance
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
export default connect(mapStateToProps,mapDispatchToProps)(UpdateAttendance);