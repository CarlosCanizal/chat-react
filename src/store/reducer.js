let theme = localStorage.getItem('theme')?localStorage.getItem('theme'):'light';
let clockDisplay = localStorage.getItem('clockDisplay')?localStorage.getItem('clockDisplay'):'12-hours';
const initialState = {
    theme : theme,
    clockDisplay: clockDisplay
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
    return state
}

export default reducer