import React,{ Component } from 'react';
import { connect } from 'react-redux';
import io from "socket.io-client";
import MessageInput from '../../components/MessageInput/MessageInput';
import MessageItem from '../../components/MessageItem/MessageItem';
import {receiveMessage,userJoined,userLeft} from '../../store/action/action';



class Chat extends Component{
    socket = null;
    state = {
        input:""
    }
    constructor(props) {
        super(props);
        this.socket = io.connect("http://chat-room-xiaoxu.c9users.io:8080/");
        const {dispatch} = this.props;
        
        this.socket.on("newMessage",function(newMessage){
            dispatch(receiveMessage(newMessage));
        });
        this.socket.on("userJoined",function(data){
            dispatch(userJoined(data));
        });
        this.socket.on("userLeft",function(data){
            dispatch(userLeft(data));
        });
        
    }

    componentWillUnmount(){
        this.socket.emit("disconnect");
    }
    
    inputMessageHandler = (e) =>{
        this.setState({input:e.target.value});
    }
    
    sendMessageHandler = (e) =>{
        e.preventDefault();
        if (this.state.input.length !== 0){
            this.socket.emit("newMessage",{message:this.state.input,userName:this.props.userName});
            this.setState({input:""});    
        }
        
    }
    
    render(){
        return(
            <div>
                <div>
                    <ul>
                        {this.props.messages.map((msg,index)=>{
                           return <MessageItem key={index} message={msg} />
                        })}
                    </ul>
                </div>
                <MessageInput messageValue={this.state.input} messageInput={this.inputMessageHandler.bind(this)} messageSend={this.sendMessageHandler.bind(this)}/>
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return {
        messages:state.messages,
        userName:state.userName
    }
}


export default connect(mapStateToProps)(Chat);