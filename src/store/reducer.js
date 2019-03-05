let theme = localStorage.getItem('theme')?localStorage.getItem('theme'):'light';
const initialState = {
    theme : theme
}

const reducer = (state=initialState, action)=>{
    if (action.type === 'CHANGE_THEME'){
        localStorage.setItem('theme',action.theme);
        return {
            ...state,
            theme: action.theme
        }
    }
    return state
}

export default reducer