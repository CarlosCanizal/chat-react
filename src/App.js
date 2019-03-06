import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Theme from './components/Theme/Theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './App.sass';

library.add(faPaperPlane)
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
