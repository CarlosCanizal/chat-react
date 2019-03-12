import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.sass';
import MessageBox from '../MessageBox/MessageBox';

class Notification extends Component{
    render(){
        return(
            <div className={styles.Notification}>
                {this.props.counter}
            </div>
        )
    }
}

MessageBox.propTypes = {
    counter: PropTypes.number
}

export default Notification