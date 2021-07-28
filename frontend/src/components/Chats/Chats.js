import React, { Component, useRef } from "react";
import "./Chats.css";
import { startEditMessage,deleteMessage } from "../../actions";
import store from "../../store";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

const Chat = ({ message,number, activeUserId }) => {
  const { text, is_user_msg } = message;

  const chatUtilsRef = useRef();

  const startEditing = (e) =>{
    store.dispatch(startEditMessage(e.target.closest('.is-user-msg').dataset.number, text))
  }
  const deleteMsg = (e) =>{
    store.dispatch(deleteMessage(e.target.closest('.is-user-msg').dataset.number, activeUserId))
  }

  const showUtils = (e) =>{
    if(e.target.classList.contains('is-user-msg')){
      const divElement = chatUtilsRef.current;
      divElement.style.display='inline-block'
    }
  }
  const hideUtils = (e) =>{
    if(e.target.classList.contains('is-user-msg')){
      const divElement = chatUtilsRef.current;
      divElement.style.display='none'
    }
  }

  return (
    <span onMouseEnter={showUtils} onMouseLeave={hideUtils} data-number={number} className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
      <div ref={chatUtilsRef} className="chat-utils">
        <BsTrash onClick={deleteMsg} />
        <BiPencil onClick={startEditing} />
      </div>
    {text}</span>
  );
};

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();

    }
    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
      };
      
    componentDidMount() {
        this.scrollToBottom();
      }
      componentDidUpdate() {
        this.scrollToBottom();
      }
    
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} number={message.number} activeUserId={this.props.activeUserId} key={message.number}/>
        ))}
      </div>
    );
  }
}

export default Chats;
