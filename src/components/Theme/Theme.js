import React,{ Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Settings from '../Settings/Settings';
import Chat from '../Chat/Chat';
import styles from './Theme.module.sass';

class Theme extends Component{
    render(){
        return(
            <div className={styles.Theme}>
                <Header />
                <Switch>
                    <Route  path="/messages" exact component={Chat}/>
                    <Route  path="/settings" exact component={Settings}/>
                    <Redirect from="/" to="/messages" />
                </Switch>
            </div>
        )
    };
};

export default Theme;