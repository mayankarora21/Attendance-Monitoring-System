import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';



class DeassignFaculty extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const facultyidBox=document.getElementById('facultyidDeassign');
        const courseidBox=document.getElementById('courseidDeassignFaculty');
        const classidBox=document.getElementById('classidDeassignFaculty');
        
        const assignment={
            facultyid:facultyidBox.value.toLowerCase(),
            courseid:courseidBox.value.toLowerCase(),
            classid:classidBox.value.toLowerCase()
        };
        fetch('http://localhost:3000/deassignfaculty',{
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
            
            else if(data==='faculty deassigned'){
                window.alert('Faculty was successfully deassigned');
                return;
            }
            else{
                window.alert('Faculty could not be deassigned');
                return;
            }
        })
        courseidBox.value='';
        classidBox.value='';
        facultyidBox.value='';
    }
    render(){
        return(
            <div className="pa4 blackBackground">
            <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                <h3>Deassign Faculty</h3>
            
            Enter faculty id of faculty
            <br></br>
            <TextField
                id="facultyidDeassign"
                placeholder="Faculty ID"
                margin="normal"
                type="number"
                required
              /><br></br><br/>
            Enter class id of class
            <br></br>
            <TextField
                id="classidDeassignFaculty"
                placeholder="ex: se4a1"
                margin="normal"
                type="text"
                required
              />
            <br></br><br/>
            Enter course id of course
            <br></br>
            <TextField
                id="courseidDeassignFaculty"
                placeholder="ex: se 202"
                margin="normal"
                type="text"
                required
              />
            <br></br><br/>
            <SubmitButton text="Deassign Faculty"></SubmitButton>
               </form>
            </div>
        );
    }
}

export default DeassignFaculty;