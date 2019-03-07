import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './AvatarSelector.module.sass';


class AvatarSelector extends Component{
    render(){

        let className = [styles.Avatar];
        let classNameActive = [styles.Avatar, styles.active];

        return(
            <div className={styles.AvatarSelector}>
                <div className={className.join(' ')}></div>
                <div className={classNameActive.join(' ')}></div>
                <div className={className.join(' ')}></div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ...state.settings,
        ...state.labels
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeClock : (timeFormat)=> dispatch({type: 'CHANGE_CLOCK', timeFormat:timeFormat})
    };
};

export default connect(mapStateToProps)(AvatarSelector);