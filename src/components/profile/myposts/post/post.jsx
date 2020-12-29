import React from 'react';

const Post = (props) => {
    return (
        <div>
            <p>{props.post}</p>
            {/* <img src='' /> */}
            <span>Likes count: {props.likesCount}</span>
        </div>
    )
}

export default Post;