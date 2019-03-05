import React, { Component } from 'react';
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

export default BodyApp