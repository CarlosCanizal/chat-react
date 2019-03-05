import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';

class SendSettings extends Component{

    render(){
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