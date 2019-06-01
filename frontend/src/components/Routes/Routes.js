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

const Routes=()=>{
    return(
        <Switch>
            <Route path="/student" component={StudentHome}></Route>
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