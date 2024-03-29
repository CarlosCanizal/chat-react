import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from "socket.io-client";
import styles from './MessageBox.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actionTypes from '../../store/actions';

class MessageBox extends Component{
    state= {
        message : ""
    }
    render(){
        this.socket = io(this.props.socketIOServer,{ transports : ['websocket'] });

        let sendMessage = event => {
            event.preventDefault();
            let message = this.state.message.trim();
            if(message){
                let date = new Date()
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                let hours24 = hours+":"+minutes+":"+seconds+" hrs";
                let timeLabel = "am";
                let hour12 = hours > 0?hours:12;
                if(hours > 12){
                    hour12 = hours-12;
                    timeLabel = "pm";
                }
                let hours12 = hour12+":"+minutes+":"+seconds+" "+timeLabel;
                
                    this.socket.emit('SEND_MESSAGE', {
                    username: this.props.username,
                    message: message,
                    hours12: hours12,
                    hours24: hours24,
                    avatar: this.props.avatar,
                    userId: this.props.userId
                    
                });
                this.setState({message:""})
            }
        }

        let keyHandler = (event)=>{
            if(event.key==="Enter"){
                // event.preventDefault()
                if(this.props.ctrlSend === "on"){
                    if( event.ctrlKey || event.metaKey ){
                        sendMessage(event)
                    }
                }else{
                    sendMessage(event)
                }
            }
        }



        let MessageHandler =(event)=>{
            this.setState({message:event.target.value})
        }

        let themeClass = [styles.SendButton]
        themeClass.push(styles[this.props.theme])
        
        let messageClass = [styles.MessageBox]
        messageClass.push(styles[this.props.theme])

        let textareaClass = []
        textareaClass.push(styles[this.props.theme])
        return(
            <div>
                <div className={messageClass.join(' ')}>
                    <textarea 
                        className={textareaClass.join(' ')}
                        onKeyDown={keyHandler} 
                        placeholder={this.props.labels.messagePlaceholder} 
                        autoFocus={true} 
                        value={this.state.message} 
                        onChange={MessageHandler} >
                    </textarea>
                </div>
                <div className={themeClass.join(' ')} onClick={sendMessage}>
                    <FontAwesomeIcon icon="paper-plane" />
                </div>
            </div>
        )
    }
}

MessageBox.propTypes ={
    socketIOServer: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    ctrlSend: PropTypes.string.isRequired,
    onChangeTheme: PropTypes.func.isRequired,
    labels : PropTypes.shape({
        messagePlaceholder: PropTypes.string.isRequired
    })
}

const mapStateToProps = state =>{
    return {
        ...state.settings,
        ...state.labels
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeTheme : ()=> dispatch({type: actionTypes.CHANGE_THEME, theme:'dark'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)