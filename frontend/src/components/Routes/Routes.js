import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Home from '../Home/Home';
import AdminHome from '../Admin/AdminHome/AdminHome';
import AddStudent from '../Admin/AddStudent/AddStudent';

const Routes=()=>{
    return(
        <Switch>
            <Route path="/addstudent" component={AddStudent}></Route>
            <Route path="/admin" exact component={AdminHome}></Route>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    );
}

export default Routes;