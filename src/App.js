import React, { Component } from 'react';
import './App.sass';
import styles from './ModuleTest.module.sass'; // Import css modules stylesheet as styles


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={styles.ModuleTest}></div>
      </div>
    );
  }
}

export default App;
