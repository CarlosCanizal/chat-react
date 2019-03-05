const defaultSettings = {
    theme : 'light',
    timeFormat: '12Hours',
    language: 'en',
    ctrlSend : false

}
let theme = localStorage.getItem('theme')?localStorage.getItem('theme'):defaultSettings['theme'];
let timeFormat = localStorage.getItem('timeFormat')?localStorage.getItem('timeFormat'):defaultSettings['timeFormat'];
let language = localStorage.getItem('language')?localStorage.getItem('language'):defaultSettings['language'];
let ctrlSend = localStorage.getItem('ctrlSend')?localStorage.getItem('ctrlSend'):defaultSettings['ctrlSend'];

const initialState = {
    theme : theme,
    timeFormat: timeFormat,
    language: language,
    ctrlSend: ctrlSend
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
    return state
}

export default reducer