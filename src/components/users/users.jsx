import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';

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
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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