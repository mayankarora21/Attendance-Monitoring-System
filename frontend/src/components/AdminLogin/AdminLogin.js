import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../Admin/SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class AdminLogin extends React.Component{
    handleFormSubmit=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const usernameBox=document.getElementById('adminUsername');
        const passwordBox=document.getElementById('adminPassword');
        const admin={
            username:usernameBox.value,
            password:passwordBox.value
        }
//        console.log(this.props)
        fetch('http://localhost:3000/adminlogin',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(admin)
        }).then(response=>response.json())
        .then(data=>{
            if(data==='right credentials'){
                this.props.loadAdmin();
                this.props.history.push('/admin');
            }
            else{
                window.alert('please enter right credentials');
            }
        })
        usernameBox.value='';
        passwordBox.value='';
    }
    render(){
        return(
            <div className="blackBackground pa4">
                <form className="bg-white w-50 centrallyAligned pv3 ph1" onSubmit={this.handleFormSubmit}>
                    <h3>Admin Login</h3>
                    Username
                    <br></br>

                    <TextField
                        id="adminUsername"
                        placeholder="admin username"
                        margin="normal"
                        type="text"
                        required
                      />
                        <br/><br/>
                    Password
                    <br></br>

                    <TextField
                        id="adminPassword"
                        placeholder="admin password"
                        margin="normal"
                        type="password"
                        required
                      />
                        <br/><br/>
                    <SubmitButton text="Login"></SubmitButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        loadAdmin:()=>{
            dispatch(actions.loadAdmin(true))
        }
    }
    
}
export default connect(null,mapDispatchToProps)(AdminLogin);