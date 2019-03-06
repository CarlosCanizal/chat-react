const initialState = {
    "messages":[],
    "notifications":0
}

const reducer = (state=initialState, action)=>{
    if (action.type === 'RECEIVE_MESSAGE'){
        console.log(action.message)
        let messages = [...state.messages,action.message];
        let notifications = state.notifications;
        return {
            messages: messages,
            notifications: ++notifications
        }
    }
    return state
}

export default reducer