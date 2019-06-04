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


export function loadDetentionList(){
    const detentionList=fetch('http://localhost:3000/getdetentionlist').then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.LOAD_DETENTION_LIST,
        payload:detentionList
    }
}

export function loadStudentListAll(){
    const studentListAll=fetch('http://localhost:3000/getallstudentlist').then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.LOAD_STUDENT_LIST_ALL,
        payload:studentListAll
    }
}

export function loadFacultyListAll(){
    const facultyListAll=fetch('http://localhost:3000/getallfacultylist').then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.LOAD_FACULTY_LIST_ALL,
        payload:facultyListAll
    }
}

export function loadClassListAll(){
    const classListAll=fetch('http://localhost:3000/getallclasslist').then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.LOAD_CLASS_LIST_ALL,
        payload:classListAll
    }
}

export function loadCourseListAll(){
    const courseListAll=fetch('http://localhost:3000/getallcourselist').then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.LOAD_COURSE_LIST_ALL,
        payload:courseListAll
    }
}

export function loadFacultyAssignmentListAll(){
    const facultyAssignmentListAll=fetch('http://localhost:3000/getallfacultyassignmentlist').then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.FACULTY_ASSIGNMENT_LIST_ALL,
        payload:facultyAssignmentListAll
    }
}

export function loadCourseAssignmentListAll(){
    const courseAssignmentListAll=fetch('http://localhost:3000/getallcourseassignmentlist').then(response=>response.json())
    .then(data=>{
        return data
    });
    return{
        type:actionTypes.COURSE_ASSIGNMENT_LIST_ALL,
        payload:courseAssignmentListAll
    }
}