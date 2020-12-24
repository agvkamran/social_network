import React from 'react';
import Header from '../src/components/header/header';
import Navbar from '../src/components/navbar/navbar';
import Profile from '../src/components/profile/profile';
import Dialogs from '../src/components/dialogs/dialogs';
import Friends from './components/friends/friends';
import News from './components/news/news';
import { Route } from 'react-router-dom';
import Music from './components/music/music';

const App = (props) => {

  return (
    <div>
      <Header />
      <Navbar />
      <Route path='/dialogs' render={() => <Dialogs store={props.store} dispatch={props.dispatch} />} />
      <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
      <Route path='/friends' render={() => <Friends state={props.state.sidebar} addNewFriend={props.addNewFriend} updateNewFriendText={props.updateNewFriendText} />} />
      <Route path='/news' render={() => <News state={props.state.siteNews} addNewPoint={props.addNewPoint} updateNewPoint={props.updateNewPoint} />} />
      <Music state={props.state.musicPage} dispatch={props.dispatch} />
    </div>
  );
}


export default App;
// state={props.state.dialogsPage}