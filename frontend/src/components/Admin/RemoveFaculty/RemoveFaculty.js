import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';



class RemoveFaculty extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const facultyidBox=document.getElementById('facultyidDelete');
        
        const faculty={
            facultyid:facultyidBox.value
        };
        fetch('http://localhost:3000/deletefaculty',{
            method:'delete',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(faculty)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='faculty does not exist'){
                window.alert('Such a faculty does not exist');
                return;
            }
            else if(data==='faculty deleted'){
                window.alert('Faculty was successfully removed');
                return;
            }
            else{
                window.alert('Faculty could not be removed');
                return;
            }
        })
        facultyidBox.value='';
    }
    render(){
        return(
            <div className="pa4 blackBackground">
            <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                <h3>Remove Faculty</h3>
            
            Enter id of faculty
            <br></br>
            <TextField
                id="facultyidDelete"
                placeholder="Faculty ID"
                margin="normal"
                type="number"
                required
              /><br></br><br/>
            
            <SubmitButton text="Remove Faculty"></SubmitButton>
               </form>
            </div>
        );
    }
}

export default RemoveFaculty;