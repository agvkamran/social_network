import React from 'react';
import MyPostsContainer from './myposts/mypostsContainer';
import ProfileInfo from './profile-info/profile-info';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;
