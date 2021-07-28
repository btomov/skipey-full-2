import React from "react";
import store from "../../store";
import { setTypingValue, sendMessage,sendEditMessage } from "../../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
    const state = store.getState();  
    const handleSubmit = e => {
        e.preventDefault();
        const {typing, editing} = state.typing;
        const { activeUserId } = state;
        if(!editing){
          store.dispatch(sendMessage(typing, activeUserId));
        }else{
          store.dispatch(sendEditMessage(editing, typing, activeUserId));
        }
      };
    
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
