const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: '1', post: 'First post', likesCount: 1 },
        { id: '2', post: 'Second post', likesCount: 2 },
        { id: '3', post: 'Third post', likesCount: 3 }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: '5',
            post: state.newPostText,
            likesCount: 4
        }
        state.posts.push(newPost);
        state.newPostText = '';
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;