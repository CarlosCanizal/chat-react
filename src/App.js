import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter} from 'react-router-dom';
import Theme from './components/Theme/Theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane, faComments, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import styles from './App.module.sass';
import io from "socket.io-client";
import * as actionTypes from './store/actions';

library.add(faPaperPlane)
library.add(faComments)
library.add(faSlidersH)
class App extends Component {

  componentWillUnmount(){
    this.socket.off();
  }

  componentDidMount(){
    
    this.socket = io(this.props.socketIOServer,{ transports : ['websocket'] });
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

App.propTypes = {
  socketIOServer: PropTypes.string.isRequired,
  onReceiveMessage: PropTypes.func.isRequired,
  onReceiveError: PropTypes.func.isRequired
}

const mapStateToProps = state =>{
  return {
      ...state.settings
  };
};

const mapDispatchToProps = dispatch=>{
  return {
    onReceiveMessage : (payload)=> dispatch({type: actionTypes.RECEIVE_MESSAGE, payload:payload}),
    onReceiveError : (message)=> dispatch({type: actionTypes.RECEIVE_ERROR, message:message})
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
