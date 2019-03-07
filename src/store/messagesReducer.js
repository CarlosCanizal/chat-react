import * as actionTypes from './actions';
const initialState = {
    "messages":[],
    "notifications":0,
    error: false
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.RECEIVE_MESSAGE:
            let messages = [...state.messages,action.payload.message];
            let notifications = state.notifications;
            if(action.payload.userId !== action.payload.message.userId)
                notifications++
            return {
                messages: messages,
                notifications: notifications,
                error: false
            }
        case actionTypes.RECEIVE_ERROR:
            return {
                ...state,
                error: action.message
            }
        case actionTypes.RESET_NOTIFICATIONS:
            return {
                ...state,
                notifications: 0
            }
        default:
            return state
    }
}

export default reducer