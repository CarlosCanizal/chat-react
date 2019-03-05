import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class LanguageSelector extends Component{

    render(){
        const languagesList = ['en','es'];
        let options = languagesList.map((language, index)=>{
            return(
                <MenuItem key={index} value={language}>{language}</MenuItem>
            )
        });

        let languageHandler= (event)=>{
            this.props.onChangeLanguage(event.target.value);
        }
        return(
            <div>
                <h3>Language</h3>
                <FormControl component="fieldset">
                <Select
                    value={this.props.language}
                    onChange={languageHandler}
                >
                {options}
                </Select>
                </FormControl>
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return {
        language : state.language
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeLanguage : (language)=> dispatch({type: 'CHANGE_LANGUAGE', language:language})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(LanguageSelector);