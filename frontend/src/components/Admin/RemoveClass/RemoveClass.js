import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';



class RemoveClass extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const classidBox=document.getElementById('classid');
        const currClass={
            classid:classidBox.value.toLowerCase(),
        };
        fetch('http://localhost:3000/deleteclass',{
            method:'delete',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currClass)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='class does not exist'){
                window.alert('Such a class does not exist');
                return;
            }
            else if(data==='class deleted'){
                window.alert('class deleted');
                return;
            }
            else{
                window.alert('Class could not be deleted');
                return;
            }
        })
        classidBox.value='';
    }
    render(){
        return(
            <div className="pa4 blackBackground">
            <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                <h3>Remove Class</h3>
            Enter class id of class
            <br></br>

            <TextField
                id="classid"
                placeholder="ex: se4a1"
                margin="normal"
                type="text"
                required
              />
                <br/><br/>
            
                <SubmitButton text="Remove Class"></SubmitButton>
               </form>
            </div>
        );
    }
}

export default RemoveClass;