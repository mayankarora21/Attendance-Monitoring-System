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

const Routes=()=>{
    return(
        <Switch>
            <Route path="/addstudent" component={AddStudent}></Route>
            <Route path="/addfaculty" component={AddFaculty}></Route>
            <Route path="/addclass" component={AddClass}></Route>
            <Route path="/addcourse" component={AddCourse}></Route>
            <Route path="/assigncourse" component={AssignCourse}></Route>
            <Route path="/assignfaculty" component={AssignFaculty}></Route>
            <Route path="/admin" exact component={AdminHome}></Route>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    );
}

export default Routes;