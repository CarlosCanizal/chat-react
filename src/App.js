import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Theme from './components/Theme/Theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane, faComments, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import styles from './App.module.sass';
import io from "socket.io-client";

library.add(faPaperPlane)
library.add(faComments)
library.add(faSlidersH)
class App extends Component {
  componentDidMount(){
    this.socket = io('localhost:8080',{ transports : ['websocket'] });
    this.socket.on('RECEIVE_MESSAGE', (data)=>{
      this.props.onReceiveMessage(data);
    });

    this.socket.io.on('connect_error', (err)=>{
      this.props.onReceiveError('connectionError');
    });
  }

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

const mapDispatchToProps = dispatch=>{
  return {
    onReceiveMessage : (message)=> dispatch({type: 'RECEIVE_MESSAGE', message:message}),
    onReceiveError : (message)=> dispatch({type: 'RECEIVE_ERROR', message:message})
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
