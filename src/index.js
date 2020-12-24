import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
        store={store}
          // addMusic={store.addMusic.bind(store)}
          // addMusicText={store.addMusicText.bind(store)}
          dispatch={store.dispatch.bind(store)}
          // addNewFriend={store.addNewFriend.bind(store)}
          // updateNewFriendText={store.updateNewFriendText.bind(store)}
          // addNewPoint={store.addNewPoint.bind(store)}
          // updateNewPoint={store.updateNewPoint.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// addNewMessage={addNewMessage} updateNewMessageText={updateNewMessageText} addNewFriend={addNewFriend} updateNewFriendText={updateNewFriendText} addNewPoint={addNewPoint} updateNewPoint={updateNewPoint}
rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
