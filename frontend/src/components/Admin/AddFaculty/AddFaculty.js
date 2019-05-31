import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';



class AddStudent extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const nameBox=document.getElementById('facultyName');
        const emailBox=document.getElementById('facultyEmail');
        const contactBox=document.getElementById('facultyContact');
//        console.log(nameBox.value.toLowerCase(),contactBox.value,emailBox.value.toLowerCase());
        const faculty={
            name:nameBox.value.toLowerCase(),
            email:emailBox.value.toLowerCase(),
            contact:contactBox.value,
        };
        fetch('http://localhost:3000/addfaculty',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(faculty)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='faculty already exists'){
                window.alert('Such a faculty already exists');
                return;
            }
            else if(Array.isArray(data)===true){
                window.alert('Faculty was successfully added');
                return;
            }
            else{
                window.alert('Faculty could not be added');
                return;
            }
        })
        emailBox.value='';
        nameBox.value='';
        contactBox.value='';
    }
    render(){
        return(
            <div className="pa4 blackBackground">
            <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                <h3>Add Faculty</h3>
            
            Enter name of faculty
            <br></br>
            <TextField
                id="facultyName"
                placeholder="Faculty Name"
                margin="normal"
                type="text"
                required
              /><br></br><br/>
            
            Enter email id of faculty
            <br></br>
            <TextField
                id="facultyEmail"
                placeholder="Faculty Email ID"
                margin="normal"
                type="email"
                required
              />
            <br></br><br/>
            Enter contact of faculty
            <br></br>

            <TextField
                id="facultyContact"
                placeholder="Faculty Contact"
                margin="normal"
                type="number"
                required
              />
            <br></br><br/>
            <SubmitButton text="Add Faculty"></SubmitButton>
               </form>
            </div>
        );
    }
}

export default AddStudent;