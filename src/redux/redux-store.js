import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import musicReducer from './music-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    musicPage: musicReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);
window.store = store;
export default store;


