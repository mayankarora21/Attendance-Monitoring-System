import React, { Component } from 'react';
import './App.css';

import Routes from './components/Routes/Routes';
import {BrowserRouter} from 'react-router-dom';

import 'tachyons';
import AppBar from './components/AppBar/AppBar';

class App extends Component {
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

export default App;
