const initialState = {
    "messages":[],
    "notifications":0,
    error: false
}

const reducer = (state=initialState, action)=>{
    if (action.type === 'RECEIVE_MESSAGE'){
        let messages = [...state.messages,action.payload.message];
        let notifications = state.notifications;
        if(action.payload.userId !== action.payload.message.userId)
            notifications++
        return {
            messages: messages,
            notifications: notifications,
            error: false
        }
    }
    else if (action.type === 'RECEIVE_ERROR'){
        return {
            ...state,
            error: action.message
        }
    }
    else if (action.type === 'RESET_NOTIFICATIONS'){
        console.log("notificat")
        return {
            ...state,
            notifications: 0
        }
    }
    return state
}

export default reducer