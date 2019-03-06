import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Theme from './components/Theme/Theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane, faComments, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import styles from './App.module.sass';

library.add(faPaperPlane)
library.add(faComments)
library.add(faSlidersH)
class App extends Component {
  render() {
    let themeClass = [styles.App];
    themeClass.push(styles[this.props.theme]);
    
    return (
      <BrowserRouter>
        <div className={themeClass.join(' ')}>
          <Theme></Theme>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state =>{
  return {
      ...state.settings
  };
};
export default connect(mapStateToProps)(App);
