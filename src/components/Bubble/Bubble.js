import React, { Component } from 'react'
import styles from './Bubble.module.sass'

class Bubble extends Component{
    render(){
        let classNames = [styles.Bubble];
        classNames.push(styles[this.props.align]);
        return(
            <div className={classNames.join(" ")}>
                {this.props.message.message}
            </div>
        )
    }
}

export default Bubble