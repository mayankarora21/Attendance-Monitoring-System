import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../Admin/SubmitButton/SubmitButton';

const FacultySignUp=(props)=>{
    const handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const emailBox=document.getElementById('facultyEmailSignUp');
        const passwordBox=document.getElementById('facultyPasswordSignUp');

        const faculty={
            email:emailBox.value.toLowerCase(),
            password:passwordBox.value.toLowerCase()
        }
        fetch('http://localhost:3000/facultysignup',{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(faculty)
            }).then(response=>response.json())
            .then(data=>{
                if(data==='signed up'){
                    window.alert("You have successfully signed up! Go go faculty login page to log in")
                }
                else if(data==='email already exist'){
                    window.alert("You can not sign up because you have already signup up")
                }
                else if(data==='faculty does not exist'){
                    window.alert('Could not sign up. This faculty does not exist in our records.');
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
                    <h3>Faculty Sign Up</h3>
                    Faculty Email
                    <br></br>

                    <TextField
                        id="facultyEmailSignUp"
                        placeholder="Faculty Email"
                        margin="normal"
                        type="email"
                        required
                      />
                        <br/><br/>
                    Faculty Password
                    <br></br>

                    <TextField
                        id="facultyPasswordSignUp"
                        placeholder="Faculty Password"
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

export default FacultySignUp;