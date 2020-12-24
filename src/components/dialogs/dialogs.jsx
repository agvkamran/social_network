import React from 'react';
import styles from './dialogs.module.css';
import DialogItem from '../dialogs/dialog-item/dialog-item';
import Message from '../dialogs/message/message';
import {addMessageAC, onMessageChangeAC} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map((m) => <Message id={m.id} message={m.message} />);

    // let newMessageElement = React.createRef();

    let addMessage = () => {
        // props.addNewMessage();
        props.store.dispatch(addMessageAC())
    }
    
    let onMessageChange = (e) => {
        // let msg = newMessageElement.current.value;
        let msg = e.target.value;
        // props.updateNewMessageText(msg);
        props.store.dispatch(onMessageChangeAC(msg))
    }


    return (
        <div className={styles.dialogs_div}>
            <div className={styles.users}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.flex_div}>
                <textarea value={state.newMessageText} onChange={onMessageChange}></textarea>
                <button className={styles.button_default} onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;