import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ResetSettings extends Component{
    render(){
        return(
            <Button size="large" onClick={this.props.resetSettings}>
                {this.props.labels.resetSettings}
            </Button>
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