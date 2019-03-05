import React, { Component } from 'react';
import Header from '../Header/Header';
import BodyApp from '../BodyApp/BodyApp';

class Chat extends Component {
  render() {
    return (
        <div>
            <Header />
            <BodyApp />
        </div>
    );
  }
}

export default Chat;