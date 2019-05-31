import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';



class RemoveCourse extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const courseidBox=document.getElementById('courseidDelete');
        
        const currCourse={
            courseid:courseidBox.value.toLowerCase(),
        };
        fetch('http://localhost:3000/deletecourse',{
            method:'delete',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currCourse)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='course does not exist'){
                window.alert('Such a course does not exists');
                return;
            }
            else if(data==='course deleted'){
                window.alert('Course was successfully deleted');
                return;
            }
            else{
                window.alert('Course could not be deleted');
                return;
            }
        })
        courseidBox.value='';
    }
    render(){
        return(
            <div className="pa4 blackBackground">
            <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                <h3>Remove Course</h3>
            Enter course id of course
            <br></br>

            <TextField
                id="courseidDelete"
                placeholder="ex: se202"
                margin="normal"
                type="text"
                required
              />
                <br/><br/>
            
                <SubmitButton text="Remove Course"></SubmitButton>
               </form>
            </div>
        );
    }
}

export default RemoveCourse;