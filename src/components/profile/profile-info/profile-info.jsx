import React from 'react';
import Preloader from '../../preloader/preloader';
import styles from './profile-info.module.css';
import ProfileStatus from './profile-status';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.profile_div}>
                <img src={props.profile.photos.large} />
                {/* <p>{props.profile.aboutMe}</p> */}
                <ProfileStatus aboutMe={props.profile.aboutMe}/>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;