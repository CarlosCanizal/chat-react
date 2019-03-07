import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import ClockSelector from '../ClockSelector/ClockSelector';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SendSettings from '../SendSettings/SendSettings';
import ResetSettings from '../ResetSettings/ResetSettings'
import Username from '../Username/Username'
import AvatarSelector from '../AvatarSelector/AvatarSelector'
import styles from './Settings.module.sass'

class Settings extends Component {
  state ={
    height: 0
  }
  componentDidMount(){
    this.updateHeight()
    window.addEventListener("resize", this.updateHeight);
  }

  updateHeight = ()=>{
    this.setState({height:window.innerHeight-145})
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateHeight);
  }
  render() {
    let themeClass = [styles.SettingsBox];
    themeClass.push(styles[this.props.theme]);

    return (
        <div>
            <BodyApp>
              <div style={{height:this.state.height}}  className={styles.SettingsBody}>
                <AvatarSelector />
                <Username />
                <div className={themeClass.join(' ')}>
                  <ThemeSelector />
                  <ClockSelector />
                  <LanguageSelector />
                  <SendSettings />
                </div>
              </div>
            </BodyApp>
            <Footer>
              <ResetSettings />
            </Footer>
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
      ...state.settings
  };
};
export default connect(mapStateToProps)(Settings);