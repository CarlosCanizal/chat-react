const initialState = {
    "messages":[],
    "notifications":0,
    error: false
}

const reducer = (state=initialState, action)=>{
    if (action.type === 'RECEIVE_MESSAGE'){
        console.log(action.message)
        let messages = [...state.messages,action.message];
        let notifications = state.notifications;
        return {
            messages: messages,
            notifications: ++notifications,
            error: false
        }
    }
    else if (action.type === 'RECEIVE_ERROR'){
        console.log(action.message)
        return {
            ...state,
            error: action.message
        }
    }
    return state
}

export default reducer