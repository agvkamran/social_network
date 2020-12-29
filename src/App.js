import React from 'react';
import Header from '../src/components/header/header';
import Navbar from '../src/components/navbar/navbar';
import Profile from '../src/components/profile/profile';
import DialogsContainer from './components/dialogs/dialogsContainer';
import { Route } from 'react-router-dom';
import MusicContainer from './components/music/musicContainer';

const App = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/music' render={() => <MusicContainer />} />
      {/* <Route path='/friends' render={() => <Friends state={props.store.getState().sidebar} dispatch={props.dispatch} />} />

      <Route path='/news' render={() => <News state={props.state.siteNews}
                                              addNewPoint={props.addNewPoint}
                                              updateNewPoint={props.updateNewPoint} />} /> */}
    </div>
  );
}


export default App;
// state={props.state.dialogsPage}


// profilePage={props.state.profilePage}
      // <Route path='/friends' render={() => <Friends state={props.state.sidebar}
      //                                               addNewFriend={props.addNewFriend}
      //                                               updateNewFriendText={props.updateNewFriendText}
      //                                               store={props.store} />} />
                                                    
      // <Route path='/news' render={() => <News state={props.state.siteNews}
      //                                         addNewPoint={props.addNewPoint}
      //                                         updateNewPoint={props.updateNewPoint} />} />