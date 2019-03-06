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

    return (
        <div>
            <BodyApp>
              <Username />
              <div className={styles.SettingsBox}>
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

export default connect()(Settings);