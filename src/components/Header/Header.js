import React, { Component } from 'react';
import { NavLink, withRouter  } from 'react-router-dom';
import styles from './Header.module.sass';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.sass'

class Header extends Component{

    
    render(){
        let themeClass = [styles.Header];
        themeClass.push(styles[this.props.theme]);
        
        return (
            <header className={themeClass.join(' ')}>
                <nav>
                    <NavLink to="/messages" exact> 
                        <FontAwesomeIcon icon="comments" />
                        Messages
                    </NavLink>
                    <NavLink to="/settings" exact>
                        <FontAwesomeIcon icon="sliders-h" />
                        Config
                    </NavLink>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state =>{
    return {
        theme : state.settings.theme
    };
};

export default withRouter(connect(mapStateToProps)(Header));