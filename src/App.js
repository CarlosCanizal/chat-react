import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Theme from './components/Theme/Theme';
import './App.sass';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Theme></Theme>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
