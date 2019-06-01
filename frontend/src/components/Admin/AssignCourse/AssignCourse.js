import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import LoginFirst from '../../LoginFirst/LoginFirst';



class AssignCourse extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const rollBox=document.getElementById('rollAssign');
        const courseidBox=document.getElementById('courseidAssign');
        
        const assignment={
            roll:rollBox.value.toLowerCase(),
            courseid:courseidBox.value.toLowerCase()
        };
        fetch('http://localhost:3000/assigncourse',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(assignment)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='assignment already exists'){
                window.alert('Such an assignment already exists');
                return;
            }
            else if(data==='student does not exist'){
                window.alert('This student does not exist');
                return;
            }
            else if(data==='course does not exist'){
                window.alert('This course does not exist');
                return;
            }
            else if(data==='course assigned'){
                window.alert('Course was successfully assigned');
                return;
            }
            else{
                window.alert('Course could not be assigned');
                return;
            }
        })
        rollBox.value='';
        courseidBox.value='';
    }
    render(){
        if(this.props.isAdminLoggedIn===false){
            return <LoginFirst></LoginFirst>
        }
        else{
            return(
                <div className="pa4 blackBackground">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                    <h3>Assign Course</h3>

                Enter roll number of student
                <br></br>
                <TextField
                    id="rollAssign"
                    placeholder="ex: 2k17/se/001"
                    margin="normal"
                    type="text"
                    required
                  /><br></br><br/>

                Enter course id of course
                <br></br>
                <TextField
                    id="courseidAssign"
                    placeholder="ex: se 202"
                    margin="normal"
                    type="text"
                    required
                  />
                <br></br><br/>
                <SubmitButton text="Assign Course"></SubmitButton>
                   </form>
                </div>
            );
        }
        
    }
}
const mapStateToProps=(state)=>{
    return {
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
export default connect(mapStateToProps,null)(AssignCourse);