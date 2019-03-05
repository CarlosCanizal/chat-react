import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.sass';
import Settings from './components/Settings/Settings';
import Chat from './components/Chat/Chat';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route  path="/" exact component={Chat}/>
          <Route  path="/settings" exact component={Settings}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
