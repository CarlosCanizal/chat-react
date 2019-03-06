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
                        <div className={styles.notification}>
                            10
                        </div>
                        <FontAwesomeIcon icon="comments" />
                        {this.props.labels.messages}
                    </NavLink>
                    <NavLink to="/settings" exact>
                        <FontAwesomeIcon icon="sliders-h" />
                        {this.props.labels.config}
                    </NavLink>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ...state.settings,
        ...state.labels
    };
};

export default withRouter(connect(mapStateToProps)(Header));