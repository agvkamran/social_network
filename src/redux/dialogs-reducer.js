const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_NEW_MESSAGE) {
        let newMessage = {
            id: '4',
            message:state.newMessageText
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
       state.newMessageText = action.text;
    }
    return state;
}

export let addMessageAC = () => {
    return {
        type: ADD_NEW_MESSAGE
    }
}

export let onMessageChangeAC = (msg) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, text: msg
    }
}

export default dialogsReducer;