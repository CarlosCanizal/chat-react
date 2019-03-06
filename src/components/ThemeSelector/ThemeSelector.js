import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from '../Settings/Settings.module.sass'

class ThemeSelector extends Component{
    render(){
            const themeList = ['light', 'dark'];
            let themeClass = []
            if(this.props.theme === 'dark'){
                themeClass.push(styles.MuiFormControlLabel)
            }
            let themes = themeList.map((theme, index)=>{
            return(
                <FormControlLabel className={themeClass.join(' ')} key={index} value={theme} control={<Radio />} label={theme} />
            )
        });
        let themeHandler= (event)=>{
            this.props.onChangeTheme(event.target.value);
        };
        return (
            <div>
                <h3 className={styles.Title}>Select Your Theme</h3>
                <FormControl component="fieldset">
                    <RadioGroup
                    className={styles.RadioGroup}
                    aria-label=""
                    name="themeSelector"
                    value={this.props.theme}
                    onChange={themeHandler}
                    >
                    {themes}
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        theme : state.theme
    };
};
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeTheme : (theme)=> dispatch({type: 'CHANGE_THEME', theme:theme})
    };
};
  
export default connect(mapStateToProps,mapDispatchToProps)(ThemeSelector);