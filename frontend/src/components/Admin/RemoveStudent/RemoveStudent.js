import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';



class RemoveStudent extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const rollBox=document.getElementById('studentRollDelete');
        
        const student={
            roll:rollBox.value.toLowerCase(),
        };
        fetch('http://localhost:3000/deletestudent',{
            method:'delete',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(student)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='student does not exist'){
                window.alert('Such a student does not exists');
                return;
            }
            else if(data==='student deleted'){
                window.alert('Student was successfully deleted');
                return;
            }
            else{
                window.alert('Student could not be deleted');
                return;
            }
        })
        rollBox.value='';
    }
    render(){
        return(
            <div className="pa4 blackBackground">
            <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                <h3>Remove Student</h3>
            Enter roll number of student
            <br></br>

            <TextField
                id="studentRollDelete"
                placeholder="ex: 2k17/se/001"
                type="text"
                margin="normal"
                required
              /><br></br><br/>
                <SubmitButton text="Remove Student"></SubmitButton>
               </form>
            </div>
        );
    }
}

export default RemoveStudent;