import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ClockSelector.module.sass';

class ClockSelector extends Component{

    render(){
        const timeFormats = ['12-hours','24-hours'];
        let hoursFormats = timeFormats.map((clockDisplay, index)=>{
            return(
                <div key={index} className={styles.ClockSelector}>
                    <label>{clockDisplay}</label>
                    <input name="clockDisplay" type="radio" checked={clockDisplay===this.props.clockDisplay} value={clockDisplay} onChange={()=>this.props.onChangeClock(clockDisplay)} />
                </div>
            )
        });
        return(
            <div>
                <h3>Clock Display</h3>
                {hoursFormats}
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return {
        clockDisplay : state.clockDisplay
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeClock : (clockDisplay)=> dispatch({type: 'CHANGE_CLOCK', clockDisplay:clockDisplay})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ClockSelector);