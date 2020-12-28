import React from 'react';
import { addMessageAC, onMessageChangeAC } from '../../redux/dialogs-reducer';
import Dialogs from './dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        // props.addNewMessage();
        props.store.dispatch(addMessageAC())
    }

    let onMessageChange = (msg) => {
        // let msg = newMessageElement.current.value;
        // let msg = e.target.value;
        // props.updateNewMessageText(msg);
        props.store.dispatch(onMessageChangeAC(msg))
    }


    return <Dialogs addNewMessage={addMessage}
        updateNewMessageText={onMessageChange}
        dialogs={state.dialogs}
        messages={state.messages}
        stateNewMessageText={state.stateNewMessageText} />
}

export default DialogsContainer;