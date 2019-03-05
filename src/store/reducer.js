const defaultSettings = {
    theme : 'light',
    clockDisplay: '12-hours',
    language: 'en',
    ctrlSend : 'off'

}
let theme = localStorage.getItem('theme')?localStorage.getItem('theme'):defaultSettings['theme'];
let clockDisplay = localStorage.getItem('clockDisplay')?localStorage.getItem('clockDisplay'):defaultSettings['clockDisplay'];
let language = localStorage.getItem('language')?localStorage.getItem('language'):defaultSettings['en'];
let ctrlSend = localStorage.getItem('ctrlSend')?localStorage.getItem('ctrlSend'):defaultSettings['ctrlSend'];

const initialState = {
    theme : theme,
    clockDisplay: clockDisplay,
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
        localStorage.setItem('clockDisplay',action.clockDisplay);
        return {
            ...state,
            clockDisplay: action.clockDisplay
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