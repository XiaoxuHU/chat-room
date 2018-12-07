import * as actionTypes from '../action/actionTypes';
import * as messageTypes from '../action/messageTypes'
const initalState = {
    userName:"Anonymous",
    messages:[{
        type:messageTypes.SYSTEM_MESSAGE,
        text:"Welcome to chat room"
    }]
}

const reducer = (state = initalState,action)=>{
    switch (action.type){
        case actionTypes.RECEIVE_MESSAGE:
            return {
                ...state,
                messages:[...state.messages,{
                    type:messageTypes.USER_MESSAGE,
                    text:action.message.text,
                    userName:action.message.userName
                }]
            }
        case actionTypes.SEND_MESSAGE:{
            return state;
        }
        
        case actionTypes.USER_LEFT:
            return {
                ...state,
                messages:[...state.messages,{
                    type:messageTypes.SYSTEM_MESSAGE,
                    text:`${action.data.userName} Left !`
                }]
            }
        
        case actionTypes.USER_JOINED:
            return {
                ...state,
                messages:[...state.messages,{
                    type:messageTypes.SYSTEM_MESSAGE,
                    text:`${action.data.userName} Join ! `
                }]
            }
        
        case actionTypes.SET_USER_NAME:
            return {
                ...state,
                userName:action.userName
            }
        default:
            return state;
    }
}


export default reducer;