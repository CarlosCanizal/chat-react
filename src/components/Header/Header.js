import React, { Component } from 'react';
import { NavLink, withRouter  } from 'react-router-dom';
import styles from './Header.module.sass';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Notification from '../Notification/Notification';
import Avatar from '../Avatar/Avatar';

class Header extends Component{
    render(){
        let themeClass = [styles.Header, styles.clearfix, styles[this.props.theme]];
        let blinkClass = ""
        let notifications = "";
        if(this.props.notifications > 0){
            blinkClass = styles.Blink
            notifications=(
                <Notification counter={this.props.notifications}/>
            )
        }

        return (
            <header className={themeClass.join(' ')}>
                <Avatar avatarName={this.props.avatar} avatarSize='small'/>
                <nav>
                    <NavLink to="/messages" className={blinkClass} exact> 
                        {notifications}
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
        ...state.labels,
        notifications: state.messages.notifications
    };
};

export default withRouter(connect(mapStateToProps)(Header));