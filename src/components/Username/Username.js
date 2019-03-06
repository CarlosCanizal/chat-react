import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

class Username extends Component{
    render(){

        let changeNameHandler =(event)=>{
            this.props.onChangeUsername(event.target.value);
        }

        return(
            <TextField
                id="outlined-full-width"
                label="Username"
                style={{ 'margin-top': 20 }}
                placeholder="Choose your nickname"
                helperText="This is the name will appear in the chat"
                fullWidth
                defaultValue={this.props.username}
                margin="none"
                variant="outlined"
                onChange={changeNameHandler}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        )
    }
    
}

const mapStateToProps = state =>{
    return {
        username : state.username
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeUsername : (username)=> dispatch({type: 'CHANGE_USERNAME', username:username})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Username);