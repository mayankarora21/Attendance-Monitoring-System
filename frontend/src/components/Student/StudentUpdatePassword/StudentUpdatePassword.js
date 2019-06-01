import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../../Admin/SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import LoginFirst from '../../LoginFirst/LoginFirst';

const handleFormSubmit=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    const emailBox=document.getElementById('studentEmailUpdate');
    const oldPasswordBox=document.getElementById('studentOldPassword');
    const newPasswordBox=document.getElementById('studentNewPassword');
    const student={
        email:emailBox.value.toLowerCase(),
        oldPassword:oldPasswordBox.value.toLowerCase(),
        newPassword:newPasswordBox.value.toLowerCase(),
    }
    fetch('http://localhost:3000/studentupdatepassword',{
        method:'put',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(student)
    }).then(response=>response.json())
    .then(data=>{
        if(data==='password updated'){
            window.alert('Password was successfully updated');
        }
        else if(data==='wrong credentials'){
            window.alert('Please enter right credentials');
        }
        else{
            window.alert('Password could not be updated');
        }
    })
    emailBox.value='';
    oldPasswordBox.value='';
    newPasswordBox.value='';
}
const StudentUpdatePassword=(props)=>{
    if(!props.isStudentLoggedIn){
        return <LoginFirst></LoginFirst>
    }
    else{
        return(
            <div className="blackBackground pa4">
                    <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={handleFormSubmit}>
                        <h3>Student Login</h3>
                        Email
                        <br></br>

                        <TextField
                            id="studentEmailUpdate"
                            placeholder="Student Email"
                            margin="normal"
                            type="email"
                            required
                          />
                            <br/><br/>
                        Old Password
                        <br></br>

                        <TextField
                            id="studentOldPassword"
                            placeholder="Student Old Password"
                            margin="normal"
                            type="password"
                            required
                          />
                            <br/><br/>
                        New Password
                        <br></br>

                        <TextField
                            id="studentNewPassword"
                            placeholder="Student New Password"
                            margin="normal"
                            type="password"
                            required
                          />
                            <br/><br/>
                        <SubmitButton text="Update Password"></SubmitButton>
                    </form>
                </div>
        )
    }
    
}

const mapStateToProps=(state)=>{
    return{
        isStudentLoggedIn:state.loginStudentReducer.isStudentLoggedIn
    }
}
export default connect(mapStateToProps,null)(StudentUpdatePassword);