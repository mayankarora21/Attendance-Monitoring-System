import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../Admin/SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


const FacultyLogin=(props)=>{
    const handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const emailBox=document.getElementById('facultyEmail');
        const passwordBox=document.getElementById('facultyPassword');

        const faculty={
            email:emailBox.value,
            password:passwordBox.value
        }
        fetch('http://localhost:3000/facultylogin',{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(faculty)
            }).then(response=>response.json())
            .then(data=>{
                if(Array.isArray(data)){
                    props.loginFaculty();
                    props.loadFaculty(data[0]);
                    props.history.push('/faculty');
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
                    <h3>Faculty Login</h3>
                    Email
                    <br></br>

                    <TextField
                        id="facultyEmail"
                        placeholder="Faculty Email"
                        margin="normal"
                        type="email"
                        required
                      />
                        <br/><br/>
                    Password
                    <br></br>

                    <TextField
                        id="facultyPassword"
                        placeholder="Faculty Password"
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
        loginFaculty:()=>{
            dispatch(actions.loginFaculty(true));
        },
        loadFaculty:(currFaculty)=>{
            dispatch(actions.loadStudent(currFaculty))
        }
    }
    
}
export default connect(null,mapDispatchToProps)(FacultyLogin);