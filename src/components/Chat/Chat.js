import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';
import { connect } from 'react-redux';
import Bubble from '../Bubble/Bubble';

class Chat extends Component {
  render() {
  
    let bubbles = this.props.messages.map((message, index)=>{
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
    ...state.settings,
    ...state.messages
  };
};

export default connect(mapStateToProps)(Chat);