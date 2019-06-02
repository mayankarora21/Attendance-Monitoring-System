import React, { Component } from 'react';
import './App.css';

import Routes from './components/Routes/Routes';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import 'tachyons';
import AppBar from './components/AppBar/AppBar';

import * as actions from './actions/actions';

class App extends Component {
    componentWillMount(){
//        console.log('app initializing');
        this.props.initializeApp();
    }
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <AppBar></AppBar>
            <Routes></Routes>
          </div>
        </BrowserRouter>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        initializeApp:()=>{
            dispatch(actions.loadAdmin(false));
            dispatch(actions.loginStudent(false));
            dispatch(actions.loginFaculty(false));
        }
    }
}

export default connect(null,mapDispatchToProps)(App);
