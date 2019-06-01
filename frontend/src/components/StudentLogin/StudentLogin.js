import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../Admin/SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


const StudentLogin=(props)=>{
    const handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const emailBox=document.getElementById('studentEmail');
        const passwordBox=document.getElementById('studentPassword');

        const student={
            email:emailBox.value,
            password:passwordBox.value
        }
        fetch('http://localhost:3000/studentlogin',{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(student)
            }).then(response=>response.json())
            .then(data=>{
                if(Array.isArray(data)){
                    props.loginStudent();
                    props.loadStudent(data[0]);
                    props.history.push('/student');
                }
                else{
                    window.alert('please enter right credentials');
                }
            })
            emailBox.value='';
            passwordBox.value='';
    }
    return(
        <div>
            <div className="blackBackground pa4">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={handleFormSubmit}>
                    <h3>Student Login</h3>
                    Email
                    <br></br>

                    <TextField
                        id="studentEmail"
                        placeholder="Student Email"
                        margin="normal"
                        type="email"
                        required
                      />
                        <br/><br/>
                    Password
                    <br></br>

                    <TextField
                        id="studentPassword"
                        placeholder="Student Password"
                        margin="normal"
                        type="password"
                        required
                      />
                        <br/><br/>
                    <SubmitButton text="Login"></SubmitButton>
                </form>
            </div>
        </div>
    );
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loginStudent:()=>{
            dispatch(actions.loginStudent(true));
        },
        loadStudent:(currStudent)=>{
            dispatch(actions.loadStudent(currStudent))
        }
    }
    
}
export default connect(null,mapDispatchToProps)(StudentLogin);