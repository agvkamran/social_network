import { addMessageAC, onMessageChangeAC } from '../../redux/dialogs-reducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;

//     let addMessage = () => {
//         // props.addNewMessage();
//         props.store.dispatch(addMessageAC())
//     }

//     let onMessageChange = (msg) => {
//         // let msg = newMessageElement.current.value;
//         // let msg = e.target.value;
//         // props.updateNewMessageText(msg);
//         props.store.dispatch(onMessageChangeAC(msg))
//     }


//     return <Dialogs addNewMessage={addMessage}
//         updateNewMessageText={onMessageChange}
//         dialogs={state.dialogs}
//         messages={state.messages}
//         stateNewMessageText={state.stateNewMessageText} />
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageAC());
        },
        updateNewMessageText: (msg) => {
            dispatch(onMessageChangeAC(msg))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;