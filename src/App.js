import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../src/components/header/headerContainer';
import Navbar from '../src/components/navbar/navbar';
import ProfileContainer from '../src/components/profile/profileContainer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import MusicContainer from './components/music/musicContainer';
import UsersContainer from './components/users/usersContainer';
import Login from './components/login/login';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Navbar />
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/music' render={() => <MusicContainer />} />
      <Route path='/users' render={() => <UsersContainer />} />
      <Route path='/login' render={() => <Login />} />
      {/* <Route path='/friends' render={() => <Friends state={props.store.getState().sidebar} dispatch={props.dispatch} />} />

      <Route path='/news' render={() => <News state={props.state.siteNews}
                                              addNewPoint={props.addNewPoint}
                                              updateNewPoint={props.updateNewPoint} />} /> */}
    </div>
  );
}


export default App;
