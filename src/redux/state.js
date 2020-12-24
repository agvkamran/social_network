import profileReducer from './profile-reducer';
import dialogsReducer from "./dialogs-reducer";
import musicReducer from './music-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', post: 'First post', likesCount: 1 },
                { id: '2', post: 'Second post', likesCount: 2 },
                { id: '3', post: 'Third post', likesCount: 3 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: '1', name: 'User 1' },
                { id: '2', name: 'User 2' },
                { id: '3', name: 'User 3' },
                { id: '4', name: 'User 4' },
                { id: '5', name: 'User 5' }
            ],
            messages: [
                { id: '1', message: 'Message 1' },
                { id: '2', message: 'Message 2' },
                { id: '3', message: 'Message 3' }
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                { id: '1', friend: 'Friend 1' },
                { id: '2', friend: 'Friend 2' },
                { id: '3', friend: 'Friend 3' }
            ],
            newFriendText: ''
        },
        siteNews: {
            news: [
                { id: '1', points: 'Point number one' },
                { id: '2', points: 'Point number two' },
                { id: '3', points: 'Point number three' }
            ],
            newPointText: ''
        },
        musicPage: {
            sound: [
                { id: '1', soundtrack: 'soundtrack 1' },
                { id: '2', soundtrack: 'soundtrack 2' }
            ],
            musicText: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.musicPage = musicReducer(this._state.musicPage, action);
        this._callSubscriber(this._state);
    },
    addNewFriend() {
        let newFriend = {
            id: '4',
            friend: this._state.sidebar.newFriendText
        }
        this._state.sidebar.friends.push(newFriend);
        this._state.sidebar.newFriendText = '';
        this._callSubscriber(this._state);
    },
    updateNewFriendText(frd) {
        this._state.sidebar.newFriendText = frd;
        this._callSubscriber(this._state);
    },
    addNewPoint() {
        let point = {
            id: '4',
            points: this._state.siteNews.newPointText
        }
        this._state.siteNews.news.push(point);
        this._state.siteNews.newPointText = '';
        this._callSubscriber(this._state);
    },
    updateNewPoint(newP) {
        this._state.siteNews.newPointText = newP;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}




export default store;



        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: '5',
        //         post: this._state.profilePage.newPostText,
        //         likesCount: 4
        //     }
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === ADD_NEW_MESSAGE) {
        //     let newMessage = {
        //         id: '4',
        //         message: this._state.dialogsPage.newMessageText
        //     }
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newMessageText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogsPage.newMessageText = action.text;
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === ADD_MUSIC){
        //     let newMusic = {
        //         id: '3',
        //         soundtrack: this._state.musicPage.musicText
        //     }
        //     this._state.musicPage.sound.push(newMusic);
        //     this._state.musicPage.musicText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === ADD_MUSIC_TEXT){
        //     this._state.musicPage.musicText = action.mText;
        //     this._callSubscriber(this._state);
        // }