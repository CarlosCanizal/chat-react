import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResetSettings extends Component{
    render(){
        return(
            <button onClick={this.props.resetSettings}> Reset Settings</button>
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
        resetSettings : ()=> dispatch({type: 'RESET_SETTINGS'})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ResetSettings);