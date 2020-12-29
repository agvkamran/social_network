const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: '1', name: 'User 1' },
        { id: '2', name: 'User 2' },
        { id: '3', name: 'User 3' },
        { id: '4', name: 'User 4' },
        { id: '5', name: 'User 5' }
    ],
    messages: [
        { id: '1', message: 'Message 1' },
        { id: '2', message: 'Message 2' },
        { id: '3', message: 'Message 3' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_NEW_MESSAGE) {
        let newMessage = {
            id: '4',
            message: state.newMessageText
        }
        let stateCopy = {...state};
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageText = '';
        return stateCopy;
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        let stateCopy = {...state};
        stateCopy.newMessageText = action.text;
        return stateCopy;
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