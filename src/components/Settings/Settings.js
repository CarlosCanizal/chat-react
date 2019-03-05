import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import ClockSelector from '../ClockSelector/ClockSelector';

class Settings extends Component {
  render() {

    return (
        <div>
            <BodyApp>
              <ThemeSelector />
              <ClockSelector />
            </BodyApp>
            <Footer>
            </Footer>
        </div>
    );
  }
}

export default connect()(Settings);