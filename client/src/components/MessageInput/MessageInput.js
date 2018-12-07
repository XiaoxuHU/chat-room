import React from 'react';
import classes from './MessageInput.css';
const messageInput = (props) =>{
    return(
        <div className={classes.MsgInput}>
            <textarea placeholder="text your message" rows="3" value={props.messageValue} onChange={props.messageInput}/>
            <button onClick={props.messageSend}>Send</button>
        </div>
    );
}

export default messageInput;