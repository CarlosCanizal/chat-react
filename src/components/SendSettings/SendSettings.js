import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import * as actionTypes from '../../store/actions';
import styles from '../Settings/Settings.module.sass';

class SendSettings extends Component{

    render(){
        const formats = ['off', 'on'];
        let CtrHandler= (event)=>{
            this.props.onChangeSendOption(event.target.value);
        };
        let themeClass = []
        if(this.props.theme === 'dark'){
            themeClass.push(styles.MuiFormControlLabel)
        }

        let ctrlOnOff =  formats.map((ctrlOption, index)=>{
            return(
                <FormControlLabel className={themeClass.join(' ')} key={index} value={ctrlOption} control={<Radio />} label={this.props.labels.sendEnter[ctrlOption]} />
            )
        });
        return(
            <div>
                <h3 className={styles.Title}>{this.props.labels.sendSettings}</h3>
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

SendSettings.propTypes ={
    theme: PropTypes.string.isRequired,
    ctrlSend: PropTypes.string.isRequired,
    onChangeSendOption: PropTypes.func.isRequired,
    labels : PropTypes.shape({
        sendSettings: PropTypes.string.isRequired,
        sendEnter: PropTypes.objectOf(PropTypes.string)
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
        onChangeSendOption : (ctrlSend)=> dispatch({type: actionTypes.CHANGE_CTRL_SEND, ctrlSend:ctrlSend})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SendSettings);