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
export function loginStudent(isStudentLoggedIn){
//    console.log(isStudentLoggedIn)
    return{
        type:actionTypes.LOGIN_STUDENT,
        payload:{isStudentLoggedIn:isStudentLoggedIn}
    } 
}
export function loadStudent(currStudent){
//    console.log('load student',currStudent);
    return{
        type:actionTypes.LOAD_STUDENT,
        payload:currStudent
    }
}

export function loadCourseAndClass(facultyID){
//    console.log('loading course and class',facultyID)
    const faculty={
        facultyID:facultyID
    }
    const courseAndClass=fetch('http://localhost:3000/getcourseandclass',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(faculty)
    }).then(response=>response.json())
    .then(data=>{
        return data
    });
//    console.log('action',courseAndClass)

    return{
        type:actionTypes.LOAD_COURSE_CLASS,
        payload:courseAndClass
    }
}