import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './AvatarSelector.module.sass';
import Avatar from '../Avatar/Avatar';
import * as actionTypes from '../../store/actions';

class AvatarSelector extends Component{
    changeAvatarHandler = (avatar)=>{
        this.props.onChangeAvatar(avatar);
    }
    render(){
        let avatarList = ['avatar1','avatar2','avatar3'];
        let avatars = avatarList.map((avatar, index)=>{
            let activeAvatar = ''
            if(avatar === this.props.avatar)
                activeAvatar = 'activeAvatar';
            return <Avatar key={index} changed={()=>this.changeAvatarHandler(avatar)} avatarName={avatar} activeAvatar={activeAvatar} />
        });

        return(
            <div className={styles.AvatarSelector}>
                {avatars}
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
  
const mapDispatchToProps = dispatch=>{
    return {
        onChangeAvatar : (avatar)=> dispatch({type: actionTypes.CHANGE_AVATAR, avatar:avatar})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AvatarSelector);