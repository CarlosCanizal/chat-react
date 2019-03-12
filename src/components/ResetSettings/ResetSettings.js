import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ResetSettings.module.sass';
import * as actionTypes from '../../store/actions';


class ResetSettings extends Component{
    render(){
        return(
            <div className={styles.ResetButton} onClick={this.props.resetSettings}>
                {this.props.labels.resetSettings}
            </div>
        )
    }
}

ResetSettings.propTypes ={
    resetSettings: PropTypes.func.isRequired,
    labels : PropTypes.shape({
        resetSettings: PropTypes.string.isRequired
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
        resetSettings : ()=> dispatch({type: actionTypes.RESET_SETTINGS})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ResetSettings);