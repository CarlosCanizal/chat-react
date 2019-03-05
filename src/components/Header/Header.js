import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';


class Header extends Component{
    render(){
        return (
            <header className={styles.Header}>
                <nav>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/settings" exact>Settings</NavLink>
                </nav>
            </header>
        )
    }
}

export default Header;