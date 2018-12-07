import React,{ Component } from 'react';
import io from "socket.io-client";
import { connect } from 'react-redux';
import classes from './SignIn.css';

import{ setUserName } from '../../store/action/action'; 

class SignIn extends Component {
    socket = null;
    state={
        userName:''
    }
    constructor(props) {
        super(props);
        this.socket = io.connect("http://chat-room-xiaoxu.c9users.io:8080/");
    }
    
    
    inputChangeHandler = (e) =>{
        this.setState({userName:e.target.value.trim()});
    }
    
    signInHandler = () =>{
        if (this.state.userName.length !== 0) {
            this.socket.emit("signIn",this.state.userName);
            this.props.setUserName(this.state.userName);
            this.props.history.push('/chat');    
        }
        
    }    
    render(){
        return(
            <div className={classes.SignIn}>
                <div className={classes.Form}>
                    <h2>Welcome to Chatting Room</h2>
                    <h3>Tell Me Your Name</h3>
                    <input  placeholder="Your Name" onChange={this.inputChangeHandler.bind(this)} value={this.state.userName}/>
                    <button onClick={this.signInHandler.bind(this)}>SignIn</button>
            </div>
        </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setUserName:(userName) => dispatch(setUserName(userName))
    }
}
export default connect(null,mapDispatchToProps)(SignIn);