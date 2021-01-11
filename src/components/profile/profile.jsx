import React from 'react';
import MyPostsContainer from './myposts/mypostsContainer';
import ProfileInfo from './profile-info/profile-info';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;
