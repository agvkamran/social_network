import React from 'react';
import styles from './profile-info.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <p>PROFILE IMAGE</p>
            <div className={styles.profile_div}>
                <p>Description</p>
                <p>My posts</p>
                <p>New post</p>
            </div>
        </div>
    )
}

export default ProfileInfo;