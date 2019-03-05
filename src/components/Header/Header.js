import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';


class Header extends Component{
    state = {
        theme: 'light'
    }
    render(){
        let themeClass = [styles.Header];
        themeClass.push(styles[this.state.theme]);
        
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

export default Header;