import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';
import { connect } from 'react-redux';
import io from "socket.io-client";

class Chat extends Component {
  render() {

    this.socket = io('localhost:8080');

    let sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
          author: this.props.username,
          message: "Hey Listen"
      });
      this.socket.on('RECEIVE_MESSAGE', function(data){
        console.log(data)
        // addMessage(data);
      });
      this.setState({message: ''});
    }

    return (
        <div>
            <BodyApp>
              <button onClick={sendMessage} className="btn btn-primary form-control">Send</button>
            </BodyApp>
            <Footer >
                <MessageBox></MessageBox>
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