import React from 'react';
import MyPostsContainer from './myposts/mypostsContainer';
import ProfileInfo from './profile-info/profile-info';

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile; 


// posts={props.profilePage.posts}
//                 dispatch={props.dispatch}
//                 newPostText={props.profilePage.newPostText}