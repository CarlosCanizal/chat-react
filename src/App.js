import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.sass';
import styles from './ModuleTest.module.sass'; // Import css modules stylesheet as styles
import Settings from './components/Settings/Settings';
import Chat from './components/Chat/Chat';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/settings" exact>Settings</NavLink>
          <Route  path="/" exact component={Chat}/>
          <Route  path="/settings" exact component={Settings}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
