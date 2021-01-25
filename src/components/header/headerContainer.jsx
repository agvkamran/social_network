import React from 'react';
import Header from './header';
import { connect } from "react-redux";
import { getAuthUserData } from '../../redux/auth-reducer';
import * as axios from 'axios';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount() {
    // authAPI.me().then(response => {
    //   if (response.data.resultCode === 0) {
    //     let { id, login, email } = response.data.data;
    //     this.props.setAuthUserData(id, login, email)
    //   }
    // });
    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);