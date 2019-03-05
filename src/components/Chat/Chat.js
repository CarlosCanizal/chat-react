import React, { Component } from 'react';
import Header from '../Header/Header';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';

class Chat extends Component {
  render() {
    return (
        <div>
            <Header />
            <BodyApp />
            <Footer>
                <MessageBox></MessageBox>
            </Footer>
        </div>
    );
  }
}

export default Chat;