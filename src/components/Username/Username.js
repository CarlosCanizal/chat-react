import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import * as actionTypes from '../../store/actions';
import styles from '../Settings/Settings.module.sass';

class Username extends Component{
    render(){

        let changeNameHandler =(event)=>{
            this.props.onChangeUsername(event.target.value);
        }
        let themeClass = [styles.MuiInputLabel]
        if(this.props.theme === 'dark'){
            themeClass.push(styles.dark)
        }

        return(
            <TextField
                className={themeClass.join(' ')}
                id="outlined-full-width"
                label={this.props.labels.username}
                style={{ 'marginTop': 20}}
                placeholder={this.props.labels.placeholder}
                helperText={this.props.labels.helper}
                fullWidth
                defaultValue={this.props.username}
                margin="none"
                variant="outlined"
                onChange={changeNameHandler}
                InputLabelProps={{
                    shrink: true
                }}
            />
        )
    }
    
}

Username.propTypes ={
    theme: PropTypes.string.isRequired,
    username: PropTypes.string,
    labels : PropTypes.shape({
        username: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        helper: PropTypes.string.isRequired
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
        onChangeUsername : (username)=> dispatch({type: actionTypes.CHANGE_USERNAME, username:username})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Username);