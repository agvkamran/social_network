import React from 'react';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
    let path = '/friends/' + props.id;
    return (
        <div>
           <NavLink to={path}>{props.friend}</NavLink>
        </div>
    )
}

export default FriendItem;