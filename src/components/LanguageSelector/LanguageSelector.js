import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LanguageSelector.module.sass';

class LanguageSelector extends Component{

    render(){
        const languagesList = ['en','es'];
        let options = languagesList.map((language, index)=>{
            return(
                <option key={index} value={language}>{language}</option>
            )
        });

        let languageHandler= (event)=>{
            this.props.onChangeLanguage(event.target.value);
        }
        return(
            <div>
                <h3>Language</h3>
                <select onChange={languageHandler} value={this.props.language}>
                    {options}
                </select>
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