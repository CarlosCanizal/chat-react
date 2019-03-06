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
            <div className={classNames.join(" ")}>
                <div>{this.props.username}:</div>
                {this.props.message.message}
                <div>
                    {time}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ...state
    };
};

export default connect(mapStateToProps)(Bubble)