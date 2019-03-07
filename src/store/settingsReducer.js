const userId = localStorage.getItem('userId')?localStorage.getItem('userId'):Math.random().toString(36).slice(-5);
localStorage.setItem('userId',userId);

const defaultSettings = {
    theme : 'light',
    timeFormat: 'hours12',
    language: 'en',
    ctrlSend : 'off',
    username : 'guest-'+userId,
    avatar : 'avatar1',
    userId: userId
}
let theme = localStorage.getItem('theme')?localStorage.getItem('theme'):defaultSettings['theme'];
let timeFormat = localStorage.getItem('timeFormat')?localStorage.getItem('timeFormat'):defaultSettings['timeFormat'];
let language = localStorage.getItem('language')?localStorage.getItem('language'):defaultSettings['language'];
let ctrlSend = localStorage.getItem('ctrlSend')?localStorage.getItem('ctrlSend'):defaultSettings['ctrlSend'];
let username = localStorage.getItem('username')?localStorage.getItem('username'):defaultSettings['username'];
let avatar = localStorage.getItem('avatar')?localStorage.getItem('avatar'):defaultSettings['avatar'];

const initialState = {
    theme : theme,
    timeFormat: timeFormat,
    language: language,
    ctrlSend: ctrlSend,
    username: username,
    avatar : avatar,
    userId: userId
}

const reducer = (state=initialState, action)=>{
    if (action.type === 'CHANGE_THEME'){
        localStorage.setItem('theme',action.theme);
        return {
            ...state,
            theme: action.theme
        }
    }
    else if (action.type === 'CHANGE_CLOCK'){
        localStorage.setItem('timeFormat',action.timeFormat);
        return {
            ...state,
            timeFormat: action.timeFormat
        }
    }
    else if (action.type === 'CHANGE_LANGUAGE'){
        localStorage.setItem('language',action.language);
        return {
            ...state,
            language: action.language
        }
    }
    else if (action.type === 'CHANGE_CTRL_SEND'){

        localStorage.setItem('ctrlSend',action.ctrlSend);
        return {
            ...state,
            ctrlSend: action.ctrlSend
        }
    }
    else if (action.type === 'RESET_SETTINGS'){
        localStorage.clear();
        return {
            ...defaultSettings
        }
    }
    else if (action.type === 'CHANGE_USERNAME'){
        localStorage.setItem('username',action.username);
        return {
            ...state,
            username: action.username
        }
    }
    else if (action.type === 'CHANGE_AVATAR'){
        localStorage.setItem('avatar',action.avatar);
        return {
            ...state,
            avatar: action.avatar
        }
    }
    return state
}

export default reducer