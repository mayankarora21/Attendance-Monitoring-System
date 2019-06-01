import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../Admin/SubmitButton/SubmitButton';

const StudentSignUp=(props)=>{
    const handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const emailBox=document.getElementById('studentEmailSignUp');
        const passwordBox=document.getElementById('studentPasswordSignUp');

        const student={
            email:emailBox.value,
            password:passwordBox.value
        }
        fetch('http://localhost:3000/studentsignup',{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(student)
            }).then(response=>response.json())
            .then(data=>{
                if(data==='signed up'){
                    window.alert("You have successfully signed up! Go go student login page to log in")
                }
                else if(data==='email already exist'){
                    window.alert("You can not sign up because you have already signup up")
                }
                else{
                    window.alert('You can not sign up');
                }
            })
            emailBox.value='';
            passwordBox.value='';
    }
    return(
        <div>
            <div className="blackBackground pa4">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={handleFormSubmit}>
                    <h3>Student Sign Up</h3>
                    Email
                    <br></br>

                    <TextField
                        id="studentEmailSignUp"
                        placeholder="Student Email"
                        margin="normal"
                        type="email"
                        required
                      />
                        <br/><br/>
                    Password
                    <br></br>

                    <TextField
                        id="studentPasswordSignUp"
                        placeholder="Student Password"
                        margin="normal"
                        type="password"
                        required
                      />
                        <br/><br/>
                    <SubmitButton text="Sign Up"></SubmitButton>
                </form>
            </div>
        </div>
    );
}

export default StudentSignUp;