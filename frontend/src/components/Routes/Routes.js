import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Home from '../Home/Home';
import AdminHome from '../Admin/AdminHome/AdminHome';
import AddStudent from '../Admin/AddStudent/AddStudent';
import AddFaculty from '../Admin/AddFaculty/AddFaculty';
import AddClass from '../Admin/AddClass/AddClass';
import AddCourse from '../Admin/AddCourse/AddCourse';
import AssignCourse from '../Admin/AssignCourse/AssignCourse';
import AssignFaculty from '../Admin/AssignFaculty/AssignFaculty';
import DeassignCourse from '../Admin/DeassignCourse/DeassignCourse';
import DeassignFaculty from '../Admin/DeassignFaculty/DeassignFaculty';
import RemoveStudent from '../Admin/RemoveStudent/RemoveStudent';
import RemoveFaculty from '../Admin/RemoveFaculty/RemoveFaculty';
import RemoveClass from '../Admin/RemoveClass/RemoveClass';
import RemoveCourse from '../Admin/RemoveCourse/RemoveCourse';
import AdminLogin from '../AdminLogin/AdminLogin';
import StudentHome from '../Student/StudentHome/StudentHome';
import StudentLogin from '../StudentLogin/StudentLogin';
import StudentUpdatePassword from '../Student/StudentUpdatePassword/StudentUpdatePassword';
import StudentSignUp from '../StudentSignUp/StudentSignUp';
import FacultySignUp from '../FacultySignUp/FacultySignUp';
import FacultyHome from '../Faculty/FacultyHome/FacultyHome';
import TakeAttendance from '../Faculty/TakeAttendance/TakeAttendance';
import ViewAttendance from '../Faculty/ViewAttendance/ViewAttendance';
import UpdateAttendance from '../Faculty/UpdateAttendance/UpdateAttendance';
import FacultyLogin from '../FacultyLogin/FacultyLogin';
import FacultyUpdatePassword from '../Faculty/FacultyUpdatePassword/FacultyUpdatePassword';
import ViewDetentionList from '../Admin/ViewDetentionList/ViewDetentionList';
import ViewStudentList from '../Admin/ViewStudentList/ViewStudentList';
import ViewFacultyList from '../Admin/ViewFacultyList/ViewFacultyList';
import ViewClassList from '../Admin/ViewClassList/ViewClassList';
import ViewCourseList from '../Admin/ViewCourseList/ViewCourseList';

const Routes=()=>{
    return(
        <Switch>
            <Route path="/student" component={StudentHome}></Route>
            <Route path="/viewstudentlist" component={ViewStudentList}></Route>
            <Route path="/viewcourselist" component={ViewCourseList}></Route>
            <Route path="/viewclasslist" component={ViewClassList}></Route>
            <Route path="/viewfacultylist" component={ViewFacultyList}></Route>
            <Route path="/viewdetentionlist" component={ViewDetentionList}></Route>
            <Route path="/facultyupdatepassword" component={FacultyUpdatePassword}></Route>
            <Route path="/facultylogin" component={FacultyLogin}></Route>
            <Route path="/takeattendance/:courseid/:classid" component={TakeAttendance}></Route>
            <Route path="/updateattendance/:courseid/:classid" component={UpdateAttendance}></Route>
            <Route path="/viewattendance/:courseid/:classid" component={ViewAttendance}></Route>
            <Route path="/faculty" component={FacultyHome}></Route>
            <Route path="/facultysignup" component={FacultySignUp}></Route>
            <Route path="/studentsignup" component={StudentSignUp}></Route>
            <Route path="/studentlogin"  component={StudentLogin}></Route>
            <Route path="/studentupdatepassword" component={StudentUpdatePassword}></Route>
            <Route path="/addstudent" component={AddStudent}></Route>
            <Route path="/addfaculty" component={AddFaculty}></Route>
            <Route path="/addclass" component={AddClass}></Route>
            <Route path="/addcourse" component={AddCourse}></Route>
            <Route path="/assigncourse" component={AssignCourse}></Route>
            <Route path="/assignfaculty" component={AssignFaculty}></Route>
            <Route path="/deassigncourse" component={DeassignCourse}></Route>
            <Route path="/deassignfaculty" component={DeassignFaculty}></Route>
            <Route path="/removestudent" component={RemoveStudent}></Route>
            <Route path="/removefaculty" component={RemoveFaculty}></Route>
            <Route path="/removeclass" component={RemoveClass}></Route>
            <Route path="/removecourse" component={RemoveCourse}></Route>
            <Route path="/adminlogin"  component={AdminLogin}></Route>
            <Route path="/admin" exact component={AdminHome}></Route>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    );
}

export default Routes;