import React, { Component } from 'react'
import styles from './Bubble.module.sass'
import { connect } from 'react-redux';

class Bubble extends Component{
    render(){
        let classNames = [styles.Bubble];
        let align = "right";
        if(this.props.userId === this.props.message.userId)
            align = "left"
        classNames.push(styles[align]);

        let time = this.props.message[this.props.timeFormat]

        return(
            <div className={styles.clearFix}>
                <div className={classNames.join(" ")}>
                    <div className={styles.username}>{this.props.message.username}:</div>
                    <div className={styles.message}>{this.props.message.message}</div>
                    <div className={styles.time}>
                        {time}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ...state.settings
    };
};

export default connect(mapStateToProps)(Bubble)