import React from "react";
import {Link, useParams} from 'react-router-dom';
import Post from "./Post.js";

const ViewThread = ({threads, posts}) => {

    const params = useParams();

    if(!posts.length === 0){
        return <p>Loading...</p>
    }

    const findThreadByID = (id) => {
        return threads.find((thread) => {
            return thread.id === parseInt(id);
        })
    }

    const threadPosts = posts.filter(post => post.thread.id === parseInt(params.id))

    const postNodes = threadPosts.map((post, index) => {
        return (
            <div key={index}>
                <Post post={post}/>
            </div>
        )
    })

    let thread = findThreadByID(params.id);

    return(
        <>
        <div className="thread">
        <h1>{thread.title}</h1>
        <div className="view-thread">
            {postNodes}
        </div>
        </div>
        </>
    )
}

export default ViewThread;