import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';
import { connect } from 'react-redux';

class Header extends Component{

    
    render(){
        let themeClass = [styles.Header];
        themeClass.push(styles[this.props.theme]);
        
        return (
            <header className={themeClass.join(' ')}>
                <nav>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/settings" exact>Settings</NavLink>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state =>{
    return {
      theme : state.theme
    };
};

export default connect(mapStateToProps)(Header);