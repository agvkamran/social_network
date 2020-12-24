import React from 'react';
import FriendItem from './friend-item/friend-item';

const Friends = (props) => {
    let friendElement = props.state.friends.map((f) => <FriendItem id={f.id} friend={f.friend} />)

    let newFriendElements = React.createRef();

    const addNewFriend = () => {
        props.addNewFriend();
    }

    const onFriendChange = () => {
        let friend = newFriendElements.current.value;
        props.updateNewFriendText(friend);
    }

    return (
        <div>
            <div>
                {friendElement}
            </div>
            <div>
                <textarea ref={newFriendElements} value={props.state.newFriendText} onChange={onFriendChange}></textarea>
                <button onClick={addNewFriend}>Add friend</button>
            </div>
        </div>

    )
}

export default Friends;