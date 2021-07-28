import { SET_ACTIVE_USER_ID,SET_TYPING_VALUE,SEND_MESSAGE,START_EDIT_MESSAGE,SEND_EDIT_MESSAGE,DELETE_MESSAGE} from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})
export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})
export const startEditMessage = (messageId, text) => ({
  type: START_EDIT_MESSAGE,
  payload: {
    messageId,
    text
  }
})
export const sendEditMessage = (messageId, text,userId) => ({
  type: SEND_EDIT_MESSAGE,
  payload: {
    messageId,
    text,
    userId
  }
})
export const deleteMessage = (messageId,userId) => ({
  type: DELETE_MESSAGE,
  payload: {
    messageId,
    userId
  }
})