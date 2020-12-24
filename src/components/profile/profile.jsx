import React from 'react';
import MyPosts from './myposts/myposts';
import ProfileInfo from './profile-info/profile-info';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText} />
        </div>
    )
}

export default Profile; 