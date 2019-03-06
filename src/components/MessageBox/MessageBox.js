import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from "socket.io-client";

class MessageBox extends Component{
    state= {
        message : ""
    }
    render(){
        this.socket = io('localhost:8080');

        let sendMessage = event => {
            event.preventDefault();
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
                author: this.props.username,
                message: this.state.message,
                hours12: hours12,
                hours24: hours24
                
            });
            this.setState({message:""})
        }

        let MessageHandler =(event)=>{
            this.setState({message:event.target.value})
        }

        return(
            <div>
                <textarea value={this.state.message} onChange={MessageHandler}></textarea>
                <button onClick={sendMessage}> Send </button>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ...state
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeTheme : ()=> dispatch({type: 'CHANGE_THEME', theme:'dark'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)