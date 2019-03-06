import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';
import { connect } from 'react-redux';
import io from "socket.io-client";

class Chat extends Component {
  render() {

    this.socket = io('localhost:8080');
    this.socket.on('RECEIVE_MESSAGE', function(data){
      console.log(data)
      // addMessage(data);
    });

    return (
        <div>
            <BodyApp>
            </BodyApp>
            <Footer >
                <MessageBox username={this.props.username} socket={this.socket}></MessageBox>
            </Footer>
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    ...state,
    theme : state.theme
  };
};

const mapDispatchToProps = dispatch=>{
  return {
    onChangeTheme : ()=> dispatch({type: 'CHANGE_THEME', theme:'dark'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);