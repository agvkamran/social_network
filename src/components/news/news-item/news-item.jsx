import React from 'react';
import { NavLink } from 'react-router-dom';

const NewsItem = (props) => {
    let path = '/news/' + props.id;
    return (
        <NavLink to={path}>{props.points}</NavLink>
    )
}

export default NewsItem;