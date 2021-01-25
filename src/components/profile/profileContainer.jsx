import React from 'react';
import Profile from './profile';
import { connect } from "react-redux";
import { getUserProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);
        // usersAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     });
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login' />
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

export default compose(connect(mapStateToProps, { getUserProfile }),
withRouter,
withAuthRedirect
)(ProfileContainer);
