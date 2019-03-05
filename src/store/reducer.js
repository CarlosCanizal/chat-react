const initialState = {
    theme : 'light'
}

const reducer = (state=initialState, action)=>{
    if (action.type === 'CHANGE_THEME'){
        console.log(action.theme);
        return {
            ...state,
            theme: action.theme
        }
    }
    return state
}

export default reducer