import React from 'react';
import styles from './dialogs.module.css';
import DialogItem from '../dialogs/dialog-item/dialog-item';
import Message from '../dialogs/message/message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map((m) => <Message id={m.id} message={m.message} />);

    // let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addNewMessage();
    }
    
    let onMessageChange = (e) => {
        // let msg = newMessageElement.current.value;
        let msg = e.target.value;
        props.updateNewMessageText(msg);
        // props.store.dispatch(onMessageChangeAC(msg))
    }

    if(!props.isAuth) return <Redirect to={`/login`} />;

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
                <button className={styles.button_default} onClick={onAddMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;