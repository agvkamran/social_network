import React from 'react';
import { NavLink } from 'react-router-dom';

const MusicItem = (props) => {
    let path = '/music/' + props.id;
    return (
        <div>
            <NavLink to={path}>{props.soundtrack}</NavLink>
        </div>
    )
}

export default MusicItem;