import * as actionTypes from './actions';
let socketIOServer = process.env.REACT_APP_IO_SERVER?process.env.REACT_APP_IO_SERVER:'https://kiwienterprisecloud.com:8080';

/*Generates a random string to set an userId, also is used to create the guest user*/
const userId = localStorage.getItem('userId')?localStorage.getItem('userId'):Math.random().toString(36).slice(-5);
localStorage.setItem('userId',userId);

/*Default configuration, used when user click reset settings button */
const defaultSettings = {
    theme : 'light',
    timeFormat: 'hours12',
    language: 'en',
    ctrlSend : 'off',
    username : 'guest-'+userId,
    avatar : 'avatar1',
    userId: userId,
    socketIOServer: socketIOServer
}

/* Verifies if user has storaged settings in the localStorage if not loads default settings.
Every setting is verified*/
let theme = localStorage.getItem('theme')?localStorage.getItem('theme'):defaultSettings['theme'];
let timeFormat = localStorage.getItem('timeFormat')?localStorage.getItem('timeFormat'):defaultSettings['timeFormat'];
let language = localStorage.getItem('language')?localStorage.getItem('language'):defaultSettings['language'];
let ctrlSend = localStorage.getItem('ctrlSend')?localStorage.getItem('ctrlSend'):defaultSettings['ctrlSend'];
let username = localStorage.getItem('username')?localStorage.getItem('username'):defaultSettings['username'];
let avatar = localStorage.getItem('avatar')?localStorage.getItem('avatar'):defaultSettings['avatar'];

/* Loads initial settings*/
const initialState = {
    theme : theme,
    timeFormat: timeFormat,
    language: language,
    ctrlSend: ctrlSend,
    username: username,
    avatar : avatar,
    userId: userId,
    socketIOServer: socketIOServer
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.CHANGE_THEME:
            /*Called when user changes theme in settings*/
            localStorage.setItem('theme',action.theme);
            return {
                ...state,
                theme: action.theme
            }
        case actionTypes.CHANGE_CLOCK:
            localStorage.setItem('timeFormat',action.timeFormat);
            /*Called when user changes time format in settings*/
            return {
                ...state,
                timeFormat: action.timeFormat
            }
        case actionTypes.CHANGE_LANGUAGE:
            /*Called when user changes language in settings*/
            localStorage.setItem('language',action.language);
            return {
                ...state,
                language: action.language
            }
        case actionTypes.CHANGE_CTRL_SEND:
            /*Called when user changes send options in settings*/
            localStorage.setItem('ctrlSend',action.ctrlSend);
            return {
                ...state,
                ctrlSend: action.ctrlSend
            }
        case actionTypes.RESET_SETTINGS:
            /*Called when user reset settings*/
            localStorage.clear();
            return {
                ...defaultSettings
            }
        case actionTypes.CHANGE_USERNAME:
            /*Called when user changes username in settings*/
            localStorage.setItem('username',action.username);
            return {
                ...state,
                username: action.username
            }
        case actionTypes.CHANGE_AVATAR:
            /*Called when user changes avatar in settings*/
            localStorage.setItem('avatar',action.avatar);
            return {
                ...state,
                avatar: action.avatar
            }
        default:
            return state
    }
}

export default reducer