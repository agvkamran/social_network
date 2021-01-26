import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: '1', post: 'First post', likesCount: 1 },
        { id: '2', post: 'Second post', likesCount: 2 },
        { id: '3', post: 'Third post', likesCount: 3 }
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: '5',
            post: state.newPostText,
            likesCount: 4
        }
        // let stateCopy = {...state};
        // stateCopy.posts = [...state.posts];
        return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost]
        }
        // stateCopy.posts.push(newPost);
        // stateCopy.newPostText = '';
        // return stateCopy;
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        // let stateCopy = {...state};
        return {
            ...state,
            newPostText: action.newText
        }
        // stateCopy.newPostText = action.newText;
        // return stateCopy;
    }
    else if (action.type === SET_USER_PROFILE) {
        return {
            ...state, profile: action.profile
        }
    }
    else if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status
        }
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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;