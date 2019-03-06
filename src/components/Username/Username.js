import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styles from '../Settings/Settings.module.sass'

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
                label="Username"
                style={{ 'marginTop': 20 }}
                placeholder="Choose your nickname"
                helperText="This is the name will appear in the chat"
                fullWidth
                defaultValue={this.props.username}
                margin="none"
                variant="outlined"
                onChange={changeNameHandler}
                InputLabelProps={{
                    shrink: true                }}
            />
        )
    }
    
}

const mapStateToProps = state =>{
    return {
        ...state.settings
        // username : state.settings.username
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeUsername : (username)=> dispatch({type: 'CHANGE_USERNAME', username:username})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Username);