import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ResetSettings.module.sass'

class ResetSettings extends Component{
    render(){
        return(
            <div className={styles.ResetButton} onClick={this.props.resetSettings}>
                {this.props.labels.resetSettings}
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
        resetSettings : ()=> dispatch({type: 'RESET_SETTINGS'})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ResetSettings);