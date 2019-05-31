import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';



class DeassignCourse extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const rollBox=document.getElementById('rollDeassign');
        const courseidBox=document.getElementById('courseidDeassign');
        
        const assignment={
            roll:rollBox.value.toLowerCase(),
            courseid:courseidBox.value.toLowerCase()
        };
        fetch('http://localhost:3000/deassigncourse',{
            method:'delete',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(assignment)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='assignment does not exist'){
                window.alert('Such an assignment does not exists');
                return;
            }
            else if(data==='course deassigned'){
                window.alert('Course was successfully deassigned');
                return;
            }
            else{
                window.alert('Course could not be deassigned');
                return;
            }
        })
        rollBox.value='';
        courseidBox.value='';
    }
    render(){
        return(
            <div className="pa4 blackBackground">
            <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                <h3>Deassign Course</h3>
            
            Enter roll number of student
            <br></br>
            <TextField
                id="rollDeassign"
                placeholder="ex: 2k17/se/001"
                margin="normal"
                type="text"
                required
              /><br></br><br/>
            
            Enter course id of course
            <br></br>
            <TextField
                id="courseidDeassign"
                placeholder="ex: se 202"
                margin="normal"
                type="text"
                required
              />
            <br></br><br/>
            <SubmitButton text="Deassign Course"></SubmitButton>
               </form>
            </div>
        );
    }
}

export default DeassignCourse;