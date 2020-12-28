import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import MyPosts from './myposts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }

    const onPostChange = (text) => {
        // props.updateNewPostText(text);
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        props.store.dispatch(updateNewPostTextAC(text));
    }

    return <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
}

export default MyPostsContainer; 