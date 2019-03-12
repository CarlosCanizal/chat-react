import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BodyApp.module.sass';

class BodyApp extends Component{
    render(){
        return(
            <div className={styles.BodyApp}>
                {this.props.children}
            </div>
        )
    }
}

BodyApp.propTypes = {
    children: PropTypes.node
}

export default BodyApp