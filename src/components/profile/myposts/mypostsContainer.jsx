import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import MyPosts from './myposts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//     let state = props.store.getState();

//     const addPost = () => {
//         props.store.dispatch(addPostAC());
//     }

//     const onPostChange = (text) => {
//         // props.updateNewPostText(text);
//         // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
//         props.store.dispatch(updateNewPostTextAC(text));
//     }

//     return <MyPosts addPost={addPost}
//         updateNewPostText={onPostChange}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText} />
// }

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
        // posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer; 