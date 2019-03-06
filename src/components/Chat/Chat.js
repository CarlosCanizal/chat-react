import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';
import { connect } from 'react-redux';
import io from "socket.io-client";
import Bubble from '../Bubble/Bubble';

class Chat extends Component {
  state ={
    messages:[]
  }
  componentDidMount(){
    let socket = io('localhost:8080');
    socket.on('RECEIVE_MESSAGE', (data)=>{
      console.log(data)
      let messages = [...this.state.messages];
      messages.push(data)
      this.setState({messages:messages});
    });
  }

  render() {
  
    let bubbles = this.state.messages.map((message, index)=>{
      return(
        <Bubble key={index} message={message} />
      )
    });


    return (
        <div>
            <BodyApp>
              {bubbles}
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