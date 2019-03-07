import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';
import { connect } from 'react-redux';
import Bubble from '../Bubble/Bubble';
import styles from './Chat.module.sass'

class Chat extends Component {
  render() {
    let bubbles = "";
    let errorMessage = "";
    if(this.props.error){
      errorMessage = (
        <h4 className={styles.error}>
          {this.props.labels.errors[this.props.error]}
        </h4>
      )
    }else{
      bubbles = this.props.messages.map((message, index)=>{
        return(
          <Bubble key={index} message={message} />
        )
      });
    }


    return (
        <div>
            <BodyApp>
              {errorMessage}
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
    ...state.messages,
    ...state.labels
  };
};

export default connect(mapStateToProps)(Chat);