import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class SendSettings extends Component{

    render(){
        const formats = ['on', 'off'];
        let CtrHandler= (event)=>{
            this.props.onChangeSendOption(event.target.value);
        };

        let ctrlOnOff =  formats.map((ctrlOption, index)=>{
            return(
                <FormControlLabel key={index} value={ctrlOption} control={<Radio />} label={ctrlOption} />
            )
        });
        return(
            <div>
                <h3>Send on CTRL+ENTER</h3>
                <FormControl component="fieldset">
                    <RadioGroup
                    aria-label=""
                    name="ctrSelector"
                    value={this.props.ctrlSend}
                    onChange={CtrHandler}
                    >
                    {ctrlOnOff}
                    </RadioGroup>
                </FormControl>
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