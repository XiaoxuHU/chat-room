import * as actionTypes from './actionTypes';

export const sendMessage = (message) =>{
    return {
        type: actionTypes.SEND_MESSAGE,
        message:message
    }
}

export const receiveMessage = (message) => {
    return {
        type:actionTypes.RECEIVE_MESSAGE,
        message:message
    }
}

export const userJoined = (data) => {
    return {
        type:actionTypes.USER_JOINED,
        data:data
    }
}

export const userLeft = (data) => {
    return {
        type:actionTypes.USER_LEFT,
        data:data
    }
}



export const setUserName = (userName) => {
    return {
        type: actionTypes.SET_USER_NAME,
        userName:userName    
    }
}

