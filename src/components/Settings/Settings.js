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
import styles from './Settings.module.sass'

class Settings extends Component {
  render() {
    let themeClass = [styles.SettingsBox];
    themeClass.push(styles[this.props.theme]);

    return (
        <div>
            <BodyApp>
              <Username />
              <div className={themeClass.join(' ')}>
                <ThemeSelector />
                <ClockSelector />
                <LanguageSelector />
                <SendSettings />
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