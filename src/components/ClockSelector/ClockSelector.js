import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from '../Settings/Settings.module.sass';
import * as actionTypes from '../../store/actions';


class ClockSelector extends Component{

    render(){
        const formats = ['hours12', 'hours24'];

        let clockHandler= (event)=>{
            this.props.onChangeClock(event.target.value);
        };
        let themeClass = []
        if(this.props.theme === 'dark'){
            themeClass.push(styles.MuiFormControlLabel)
        }

        let timeFormat =  formats.map((format, index)=>{
            return(
                <FormControlLabel className={themeClass.join(' ')} key={index} value={format} control={<Radio />} label={this.props.labels.timeLabels[format]} />
            )
        });

        return(
            <div>
                <h3 className={styles.Title}>{this.props.labels.timeFormat}</h3>
                <FormControl component="fieldset">
                    <RadioGroup
                    className={styles.RadioGroup}
                    aria-label=""
                    name="clockSelector"
                    value={this.props.timeFormat}
                    onChange={clockHandler}
                    >
                    {timeFormat}
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }

}

ClockSelector.propTypes = {
    theme: PropTypes.string.isRequired,
    timeFormat: PropTypes.string.isRequired,
    onChangeClock: PropTypes.func.isRequired,
    labels : PropTypes.shape({
        timeFormat: PropTypes.string.isRequired,
        timeLabels: PropTypes.objectOf(PropTypes.string)
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
        onChangeClock : (timeFormat)=> dispatch({type: actionTypes.CHANGE_CLOCK, timeFormat:timeFormat})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ClockSelector);