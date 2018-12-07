import React from 'react';
import * as messageTypes from '../../store/action/messageTypes';
const messageItem = (props) => {
    switch(props.message.type) {
        case messageTypes.USER_MESSAGE:
            return (
                <li>
                    <span>{props.message.userName}</span>: <span>{props.message.text}</span>
                </li>
            )
        case messageTypes.SYSTEM_MESSAGE:
            return <li>{props.message.text}</li>
        
        default:
            return <li>{props.message.text}</li>
    }
}

export default messageItem;