import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from '../Settings/Settings.module.sass'


class LanguageSelector extends Component{

    render(){
        const languagesList = ['en','es'];
        let options = languagesList.map((language, index)=>{
            return(
                <MenuItem key={index} value={language}>{this.props.labels.langLabels[language]}</MenuItem>
            )
        });

        let languageHandler= (event)=>{
            this.props.onChangeLanguage(event.target.value);
        }

        let themeClass = [styles.SelectMedium]
        if(this.props.theme === 'dark'){
            themeClass.push(styles.dark)
        }

        return(
            <div>
                <h3 className={styles.Title}>{this.props.labels.selectLanguage}</h3>
                <FormControl component="fieldset">
                <Select className={themeClass.join(' ')}
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
        ...state.settings,
        ...state.labels
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeLanguage : (language)=> dispatch({type: 'CHANGE_LANGUAGE', language:language})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(LanguageSelector);