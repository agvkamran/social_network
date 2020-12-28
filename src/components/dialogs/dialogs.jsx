import React from 'react';
import styles from './dialogs.module.css';
import DialogItem from '../dialogs/dialog-item/dialog-item';
import Message from '../dialogs/message/message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = props.messages.map((m) => <Message id={m.id} message={m.message} />);

    // let newMessageElement = React.createRef();

    let onAdMessage = () => {
        props.addNewMessage();
    }
    
    let onMessageChange = (e) => {
        // let msg = newMessageElement.current.value;
        let msg = e.target.value;
        props.updateNewMessageText(msg);
        // props.store.dispatch(onMessageChangeAC(msg))
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
                <textarea value={props.newMessageText} onChange={onMessageChange}></textarea>
                <button className={styles.button_default} onClick={onAdMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;