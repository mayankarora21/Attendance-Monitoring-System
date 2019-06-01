import * as actionTypes from './actionTypes';

export function loadAdmin(loggedIn){
//    console.log('admin logged in',loggedIn)
    return{
        type:actionTypes.LOAD_ADMIN,
        payload:{
            isAdminLoggedIn:loggedIn
        }
    }
}

export function loadAttendance(roll){
    const student={
        roll:roll
    }
    const attendance=fetch('http://localhost:3000/getattendance',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(student)
    }).then(response=>response.json())
    .then(data=>{
        return data
    });
    
    return{
        type:actionTypes.LOAD_ATTENDANCE,
        payload:attendance
    }
}