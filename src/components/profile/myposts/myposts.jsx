import React from 'react';
import styles from './myposts.module.css';
import Post from './post/post';


const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map((p) => <Post id={p.id} post={p.post} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);  
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        // props.dispatch(updateNewPostTextAC(text));
    }

    return (
        <div className={styles.myposts_div}>
            <div className={styles.flex_div}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts; 