import React, { Component } from 'react';
import styles from './Bubble.module.sass';
import { connect } from 'react-redux';
import Avatar from '../Avatar/Avatar';

class Bubble extends Component{
    render(){
        let classNames = [styles.Bubble];
        let align = "right";
        if(this.props.userId === this.props.message.userId)
            align = "left"
        classNames.push(styles[align]);

        let avatarClass = [styles.AvatarContainer, styles[align]];

        let time = this.props.message[this.props.timeFormat]

        let urlify= text =>{
            let urlRegex = /(https?:\/\/[^\s]+)/g;
            let media = (
                <div className={styles.message}>
                    {this.props.message.message}
                </div>
            );
            text.replace(urlRegex, url=>{
                media = isYoutube(url)
                if (!media){
                    media = isImage(url)
                    if (!media){
                        media = text.replace(urlRegex, url=>{
                            return 
                        });
                    }
                }
            })
            return media;
        }

        let isImage = url=>{
            if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
                return (
                    <div className={styles.message}>
                        {this.props.message.message}
                        <div className={styles.imageContainer}>
                            <img className={styles.bubbleImage} src={url} alt="" />
                        </div>
                    </div>
                )
            }
            return false;
        }
        let isYoutube = url=>{
            var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if(url.match(p)){
                let embed = url.match(p)[1];
                return (
                    <div className={styles.message}>
                        {this.props.message.message}
                        <iframe className={styles.iFrame} src={"https://www.youtube.com/embed/"+embed}
                            frameBorder="0"
                            allowFullScreen
                            title="video"
                        />
                    </div>
                )
            }
            return false;
        }

        let message = urlify(this.props.message.message)

        return(
            <div className={styles.clearFix}>
                <div className={avatarClass.join(' ')}>
                    <Avatar avatarName={this.props.message.avatar}  avatarSize='dynamic' />
                </div>
                <div className={classNames.join(" ")}>
                    <div className={styles.username}>
                        {this.props.message.username || this.props.labels.anonymous}:
                    </div>
                    {message}
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
        ...state.settings,
        ...state.labels
    };
};

export default connect(mapStateToProps)(Bubble)