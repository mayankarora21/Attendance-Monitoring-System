import React, { Component } from 'react';
import './App.css';

import Routes from './components/Routes/Routes';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Routes></Routes>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
