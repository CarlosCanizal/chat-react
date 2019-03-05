let theme = localStorage.getItem('theme')?localStorage.getItem('theme'):'light';
let clockDisplay = localStorage.getItem('clockDisplay')?localStorage.getItem('clockDisplay'):'12-hours';
let language = localStorage.getItem('language')?localStorage.getItem('language'):'en';
let sendOption = localStorage.getItem('sendOption')?localStorage.getItem('sendOption'):'off';

const initialState = {
    theme : theme,
    clockDisplay: clockDisplay,
    language: language,
    sendOption: sendOption
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
    else if (action.type === 'CHANGE_SEND_OPTION'){
        localStorage.setItem('sendOption',action.sendOption);
        return {
            ...state,
            sendOption: action.sendOption
        }
    }
    return state
}

export default reducer