import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';
import * as axios from "axios";
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize - 1750);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : 'https://static.toiimg.com/photo/76729750.cms'} className={styles.avatar} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true,  u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "f598884e-e0f7-439c-b88e-13e628f2f1c1"
                                    }
                                })
                                // usersAPI.unfollowUser(u)
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Unfollow</button>

                            : <button  disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "f598884e-e0f7-439c-b88e-13e628f2f1c1"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    {/* <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span> */}
                </span>
            </div>)
        }
        {pages.map((p) => {
            return <span onClick={(e) => { props.onPageChanged(p); }} className={props.currentPage === p && styles.selected}>{p + ' '}</span>
        })}
    </div>
}

export default Users;