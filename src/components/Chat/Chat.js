import React, { Component } from 'react';
import BodyApp from '../BodyApp/BodyApp';
import Footer from '../Footer/Footer';
import MessageBox from '../MessageBox/MessageBox';
import { connect } from 'react-redux';

class Chat extends Component {
  render() {
    const getTheme = ()=>{
      console.log(this.props.theme);
    }
    return (
        <div>
            <BodyApp>
              <button onClick={this.props.onChangeTheme} >Button</button>
              <button onClick={getTheme} >Button</button>
            </BodyApp>
            <Footer >
                <MessageBox></MessageBox>
            </Footer>
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    theme : state.theme
  };
};

const mapDispatchToProps = dispatch=>{
  return {
    onChangeTheme : ()=> dispatch({type: 'CHANGE_THEME', theme:'dark'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);