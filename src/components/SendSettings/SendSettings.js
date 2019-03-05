import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './SendSettings.module.sass';
import Switch from '@material-ui/core/Switch';

class SendSettings extends Component{

    render(){
        // const options = ['on','off'];
        // let sendOptions = options.map((ctrlSend, index)=>{
        //     return(
        //         <div key={index} className={styles.SendSettings}>
        //             <label>{ctrlSend}</label>
        //             <input name="ctrlSend" type="radio" checked={ctrlSend===this.props.ctrlSend} value={ctrlSend} onChange={()=>this.props.onChangeSendOption(ctrlSend)} />
        //         </div>
        //     )
        // });


        return(
            <div>
                <h3>Send on CTRL+ENTER</h3>
                <label>Off</label>
                <Switch
                    onChange={()=>this.props.onChangeSendOption(!this.props.ctrlSend)}
                    checked={this.props.ctrlSend}
                />
                <label>On</label>
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
        onChangeSendOption : (ctrlSend)=> dispatch({type: 'CHANGE_CTRL_SEND', ctrlSend:ctrlSend})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SendSettings);