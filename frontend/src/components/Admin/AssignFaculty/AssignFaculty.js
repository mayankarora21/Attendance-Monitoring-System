import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import LoginFirst from '../../LoginFirst/LoginFirst';


class AssignFaculty extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const facultyidBox=document.getElementById('facultyid');
        const courseidBox=document.getElementById('courseidAssignFaculty');
        const classidBox=document.getElementById('classidAssignFaculty');
        
        const assignment={
            facultyid:facultyidBox.value.toLowerCase(),
            courseid:courseidBox.value.toLowerCase(),
            classid:classidBox.value.toLowerCase()
        };
        fetch('http://localhost:3000/assignfaculty',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(assignment)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='assignment already exist'){
                window.alert('Such an assignment already exists');
                return;
            }
            else if(data==='faculty does not exist'){
                window.alert('This faculty does not exist');
                return;
            }
            else if(data==='course does not exist'){
                window.alert('This course does not exist');
                return;
            }
            else if(data==='class does not exist'){
                window.alert('This class does not exist');
                return;
            }
            else if(data==='faculty assigned'){
                window.alert('Faculty was successfully assigned');
                return;
            }
            else{
                window.alert('Faculty could not be assigned');
                return;
            }
        })
        courseidBox.value='';
        classidBox.value='';
        facultyidBox.value='';
    }
    render(){
        if(this.props.isAdminLoggedIn===false){
            return <LoginFirst></LoginFirst>
        }
        else{
            return(
                <div className="pa4 blackBackground">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                    <h3>Assign Faculty</h3>

                Enter faculty id of faculty
                <br></br>
                <TextField
                    id="facultyid"
                    placeholder="Faculty ID"
                    margin="normal"
                    type="number"
                    required
                  /><br></br><br/>
                Enter class id of class
                <br></br>
                <TextField
                    id="classidAssignFaculty"
                    placeholder="ex: se4a1"
                    margin="normal"
                    type="text"
                    required
                  />
                <br></br><br/>
                Enter course id of course
                <br></br>
                <TextField
                    id="courseidAssignFaculty"
                    placeholder="ex: se 202"
                    margin="normal"
                    type="text"
                    required
                  />
                <br></br><br/>
                <SubmitButton text="Assign Faculty"></SubmitButton>
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
export default connect(mapStateToProps,null)(AssignFaculty);