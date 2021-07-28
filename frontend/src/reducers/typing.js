import { SET_TYPING_VALUE,SEND_MESSAGE,START_EDIT_MESSAGE,SEND_EDIT_MESSAGE } from "../constants/action-types";

const initState = {
  typing: '',
  editing: false
}
export default function typing(state = initState, action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return {
        ...state,
        typing: action.payload
      }
    case SEND_MESSAGE:
      return {
        ...state,
        typing: ''
      };
    case START_EDIT_MESSAGE:
      console.log(action, ' action');
      return {
        ...state,
        editing: action.payload.messageId,
        typing: action.payload.text
      }
    case SEND_EDIT_MESSAGE:
      return {
        ...state,
        editing:'',
        typing: '',
      };

    default:
      return state;
  }
}
