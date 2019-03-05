import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThemeSelector extends Component{
    render(){
        const themeList = ['light', 'dark'];
        let themes = themeList.map((theme, index)=>{
            return(
                <div key={index}>
                    <label>{theme}</label>
                    <input name="theme" type="radio" defaultChecked={theme===this.props.theme} value={theme} onChange={()=>this.props.onChangeTheme(theme)} />
                </div>
            )
        });
        return themes
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