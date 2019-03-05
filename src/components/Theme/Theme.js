import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Settings from '../Settings/Settings';
import Chat from '../Chat/Chat';

class Theme extends Component{
    render(){
        return(
            <div>
                <Header />
                <Route  path="/" exact component={Chat}/>
                <Route  path="/settings" exact component={Settings}/>
            </div>
        )
    };
};

export default Theme;