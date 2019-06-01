import React,{Component} from 'react';

import TextField from '@material-ui/core/TextField';

import SubmitButton from '../SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import LoginFirst from '../../LoginFirst/LoginFirst';


class AddClass extends Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const classidBox=document.getElementById('classid');
        const branchBox=document.getElementById('classBranch');
        const semesterBox=document.getElementById('classSemester');
        const sectionBox=document.getElementById('classSection');
//        console.log(classidBox.value,semesterBox);
        if(semesterBox.value>8 || semesterBox.value<1){
            window.alert('Please enter a valid semester');
            return;
        }
        const currClass={
            classid:classidBox.value.toLowerCase(),
            branch:branchBox.value.toLowerCase(),
            semester:semesterBox.value,
            section:sectionBox.value.toLowerCase()
        };
        fetch('http://localhost:3000/addclass',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currClass)
        }).then(response=>response.json())
            .then(data=>{
            if(data==='class already exists'){
                window.alert('Such a class already exists');
                return;
            }
            else if(data==='success'){
                window.alert('class added');
                return;
            }
            else{
                window.alert('Class could not be added');
                return;
            }
        })
        classidBox.value='';
        branchBox.value='';
        semesterBox.value='';
        sectionBox.value='';
    }
    render(){
        if(this.props.isAdminLoggedIn===false){
            return <LoginFirst></LoginFirst>
        }
        else{
            return(
                <div className="pa4 blackBackground">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                    <h3>Add Class</h3>
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
                Enter branch of class
                <br></br>
                <TextField
                    id="classBranch"
                    placeholder="Class Branch"
                    margin="normal"
                    type="text"
                    required
                  /><br></br><br/>
                Enter semeter of class
                <br></br>

                <TextField
                    id="classSemester"
                    placeholder="Class semester"
                    margin="normal"
                    type="number"
                    required
                  />
                <br></br><br/>
                Enter section of class
                <br></br>

                <TextField
                    id="classSection"
                    placeholder="ex: a1"
                    margin="normal"
                    type="text"
                    required
                  />
                <br></br><br/>

                    <SubmitButton text="Add Class"></SubmitButton>
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
export default connect(mapStateToProps,null)(AddClass);