import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import LoginFirst from '../../LoginFirst/LoginFirst';


class AddCourse extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const courseidBox=document.getElementById('courseid');
        const nameBox=document.getElementById('courseName');
        const branchBox=document.getElementById('courseBranch');
        const semesterBox=document.getElementById('courseSemester');
        
//        console.log(courseidBox.value,nameBox.value,branchBox.value,semesterBox.value);
        
        const currCourse={
            courseid:courseidBox.value.toLowerCase(),
            branch:branchBox.value.toLowerCase(),
            semester:semesterBox.value,
            name:nameBox.value.toLowerCase()
        };
        fetch('http://localhost:3000/addcourse',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currCourse)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='course already exists'){
                window.alert('Such a course already exists');
                return;
            }
            else if(data==='course added'){
                window.alert('Course was successfully added');
                return;
            }
            else{
                window.alert('Course could not be added');
                return;
            }
        })
        courseidBox.value='';
        nameBox.value='';
        semesterBox.value='';
        branchBox.value='';
    }
    render(){
        if(this.props.isAdminLoggedIn===false){
            return <LoginFirst></LoginFirst>
        }
        else{
            return(
                <div className="pa4 blackBackground">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                    <h3>Add Course</h3>
                Enter course id of course
                <br></br>

                <TextField
                    id="courseid"
                    placeholder="ex: se202"
                    margin="normal"
                    type="text"
                    required
                  />
                    <br/><br/>
                Enter name of course
                <br></br>

                <TextField
                    id="courseName"
                    placeholder="Course Name"
                    margin="normal"
                    type="text"
                    required
                  />
                    <br/><br/>
                Enter branch of course
                <br></br>
                <TextField
                    id="courseBranch"
                    placeholder="Course Branch"
                    margin="normal"
                    type="text"
                    required
                  /><br></br><br/>
                Enter semeter of course
                <br></br>

                <TextField
                    id="courseSemester"
                    placeholder="Course semester"
                    margin="normal"
                    type="number"
                    required
                  />
                <br></br><br/>

                    <SubmitButton text="Add Course"></SubmitButton>
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
export default connect(mapStateToProps,null)(AddCourse);