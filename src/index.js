import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import settingsReducer from './store/settingsReducer';
import languageReducer from './store/languageReducer';
import messagesReducer from './store/messagesReducer';

import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    'settings': settingsReducer,
    'labels': languageReducer,
    'messages': messagesReducer
});

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
