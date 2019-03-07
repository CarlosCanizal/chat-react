import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';
import { connect } from 'react-redux';
import Bubble from '../Bubble/Bubble';
import styles from './Chat.module.sass'

class Chat extends Component {
  state ={
    height: 0
  }
  componentDidUpdate(){
    this.node.scrollTop = this.node.scrollHeight;
  }

  componentDidMount(){
    this.setState({height:window.innerHeight-114})
    this.node.addEventListener('scroll', this.reachBottom);
  }

  reachBottom = ()=>{
    if (this.node.scrollHeight-this.node.clientHeight === this.node.scrollTop){
      this.props.resetNotifications()
    }
  }

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
              <div style={{height:this.state.height}} ref={(node) => { this.node = node; }} className={styles.ChatBody}>
                {errorMessage}
                {bubbles}
              </div>
            </BodyApp>
            <Footer >
                <MessageBox></MessageBox>
            </Footer>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch=>{
  return {
      resetNotifications : ()=> dispatch({type: 'RESET_NOTIFICATIONS'})
  };
};


const mapStateToProps = state =>{
  return {
    ...state.settings,
    ...state.messages,
    ...state.labels
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Chat);