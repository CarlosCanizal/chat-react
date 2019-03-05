import React, { Component } from 'react';
import Header from '../Header/Header';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';

class Settings extends Component {
  render() {
    return (
        <div>
            <Header />
            <BodyApp />
            <Footer>
            </Footer>
        </div>
    );
  }
}

export default Settings;