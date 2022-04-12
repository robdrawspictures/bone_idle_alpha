import React from "react";
import Assets from "../Assets";

const Post = ({post}) => {

    if(!post){
        return(
            <p>Loading...</p>
        )
    }

    let user = post.user;

    return (
        <>
            <div className="forum-post">
                <div className="user-post-card">
                    <img src={Assets.Avatars[user.username]} width="100" alt="user-avatar"/>
                    <p>{user.username}</p>
                    <p className="admin-status">{user.admin ? "[Admin]" : null}</p>
                    <div className="post-tag">"{user.tag}"</div>
                </div>
                <div className="post-content">
                    <div className="post-id">
                        <p>#{post.id}</p>
                        <hr/>
                    </div>
                    <p>{post.body}</p>
                </div>
            </div>
        </>

    )

}

export default Post;