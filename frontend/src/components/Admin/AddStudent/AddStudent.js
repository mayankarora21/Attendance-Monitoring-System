import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import LoginFirst from '../../LoginFirst/LoginFirst';


class AddStudent extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const rollBox=document.getElementById('studentRoll');
        const nameBox=document.getElementById('studentName');
        const emailBox=document.getElementById('studentEmail');
        const contactBox=document.getElementById('studentContact');
        const classidBox=document.getElementById('studentClass');
//        console.log(rollBox.value.toLowerCase(),nameBox.value.toLowerCase(),contactBox.value,emailBox.value.toLowerCase(),classidBox.value.toLowerCase());
        const student={
            roll:rollBox.value.toLowerCase(),
            name:nameBox.value.toLowerCase(),
            email:emailBox.value.toLowerCase(),
            contact:contactBox.value,
            classid:classidBox.value.toLowerCase()
        };
        fetch('http://localhost:3000/addstudent',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(student)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='student already exists'){
                window.alert('Such a student already exists');
                return;
            }
            else if(data==='class does not exists'){
                window.alert('Such a class does not exists');
                return;
            }
            else if(data==='student added'){
                window.alert('Student was successfully added');
                return;
            }
            else{
                window.alert('Student could not be added');
                return;
            }
        })
        rollBox.value='';
        emailBox.value='';
        nameBox.value='';
        contactBox.value='';
        classidBox.value='';
    }
    render(){
        if(this.props.isAdminLoggedIn===false){
            return <LoginFirst></LoginFirst>
        }
        else{
            return(
                <div className="pa4 blackBackground">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                    <h3>Add Student</h3>
                Enter roll number of student
                <br></br>

                <TextField
                    id="studentRoll"
                    placeholder="ex: 2k17/se/001"
                    type="text"
                    margin="normal"
                    required
                  /><br></br><br/>
                Enter name of student
                <br></br>
                <TextField
                    id="studentName"
                    placeholder="Student Name"
                    margin="normal"
                    type="text"
                    required
                  /><br></br><br/>
                Enter email id of student
                <br></br>

                <TextField
                    id="studentEmail"
                    placeholder="Student Email ID"
                    margin="normal"
                    type="email"
                    required
                  />
                <br></br><br/>
                Enter contact of student
                <br></br>

                <TextField
                    id="studentContact"
                    placeholder="Student Contact"
                    margin="normal"
                    type="number"
                    required
                  />
                <br></br><br/>
                Enter class id of student
                <br></br>

                <TextField
                    id="studentClass"
                    placeholder="ex: se4a1"
                    margin="normal"
                    type="text"
                    required
                  />
                    <br/><br/>
                    <SubmitButton text="Add Student"></SubmitButton>
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
export default connect(mapStateToProps,null)(AddStudent);