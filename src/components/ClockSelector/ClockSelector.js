import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from './ClockSelector.module.sass'


class ClockSelector extends Component{

    render(){
        const formats = ['hours12', 'hours24'];

        let clockHandler= (event)=>{
            this.props.onChangeClock(event.target.value);
        };

        let timeFormat =  formats.map((format, index)=>{
            return(
                <FormControlLabel key={index} value={format} control={<Radio />} label={format} />
            )
        });

        return(
            <div>
                <h3 className={styles.Title}>Time Format</h3>
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

const mapStateToProps = state =>{
    return {
        timeFormat : state.timeFormat
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeClock : (timeFormat)=> dispatch({type: 'CHANGE_CLOCK', timeFormat:timeFormat})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ClockSelector);