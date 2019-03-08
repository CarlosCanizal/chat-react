import React,{ Component } from 'react';
import styles from './Notification.module.sass';

class Notification extends Component{
    render(){
        return(
            <div className={styles.Notification}>
                {this.props.counter}
            </div>
        )
    }
}

export default Notification