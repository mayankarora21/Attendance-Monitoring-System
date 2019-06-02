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


export function loadStudentList(courseid,classid){
    const object={
        courseid:courseid,
        classid:classid
    }
//    console.log(object);
    const studentList=fetch('http://localhost:3000/getstudentslist',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(object)
    }).then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.LOAD_STUDENT_LIST,
        payload:studentList
    }
}

export function loginFaculty(isFacultyLoggedIn){
//    console.log('loginFaculty action',isFacultyLoggedIn)
    return{
        type:actionTypes.LOGIN_FACULTY,
        payload:{isFacultyLoggedIn:isFacultyLoggedIn}
    }
}

export function loadFaculty(faculty){
    return{
        type:actionTypes.LOAD_FACULTY,
        payload:faculty
    }
}