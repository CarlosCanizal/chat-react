import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './SendSettings.module.sass';

class SendSettings extends Component{

    render(){
        const options = ['on','off'];
        let sendOptions = options.map((sendOption, index)=>{
            return(
                <div key={index} className={styles.SendSettings}>
                    <label>{sendOption}</label>
                    <input name="sendOption" type="radio" defaultChecked={sendOption===this.props.sendOption} value={sendOption} onChange={()=>this.props.onChangeSendOption(sendOption)} />
                </div>
            )
        });

        return(
            <div>
                <h3>Send on CTRL+ENTER</h3>
                {sendOptions}
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return {
        sendOption : state.sendOption
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeSendOption : (sendOption)=> dispatch({type: 'CHANGE_SEND_OPTION', sendOption:sendOption})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SendSettings);