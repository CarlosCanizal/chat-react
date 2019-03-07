import React, { Component } from 'react'
import styles from './Avatar.module.sass';

class Avatar extends Component{
    
    render(){
        let className = [styles.Avatar, styles[this.props.avatarName], styles[this.props.activeAvatar], styles[this.props.avatarSize]];

        return(
            <div onClick={this.props.changed} className={className.join(' ')}></div>
        )
    }
}

export default Avatar