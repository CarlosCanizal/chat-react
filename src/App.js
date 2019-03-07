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
      this.props.onReceiveMessage({message:data, userId:this.props.userId});
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
    onReceiveMessage : (payload)=> dispatch({type: 'RECEIVE_MESSAGE', payload:payload}),
    onReceiveError : (message)=> dispatch({type: 'RECEIVE_ERROR', message:message})
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
