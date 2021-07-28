import { SEND_MESSAGE, SEND_EDIT_MESSAGE,DELETE_MESSAGE } from "../constants/action-types";
import  _ from 'lodash';

import { getMessages } from "../static-data";
export default function messages(state = getMessages(10), action) {
  switch(action.type){
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    case SEND_EDIT_MESSAGE:
      const {messageId, text, userId: user} = action.payload;
      const allUserMessages = state[user];
      return{
        ...state,
        [user]: {
          ...allUserMessages,
          [messageId]:{
            messageId,
            text,
            is_user_msg: true,
            number: messageId,
          }
        }

      }
    case DELETE_MESSAGE:
      const {messageId: msgId, userId: userChat} = action.payload;
      const allUserMessages1 = state[userChat];
      delete allUserMessages1[msgId]
      return{
        ...state,
        [userChat]: {
          ...allUserMessages1
        }
      }
    default:
      return state;
  }
}
