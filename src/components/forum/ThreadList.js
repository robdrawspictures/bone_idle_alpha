import React from 'react';
import Thread from './Thread.js';

const ThreadList = ({threads, posts, users}) => {

    if(threads.length === 0){
        return <p>Loading...</p>
    }

    const ThreadNodes = threads.map((thread, index) => {
        return (
            <div key={index} className="thread-list-item">
                <Thread thread={thread} posts={posts} users={users}/>
            </div>
        )
    })

    return(
        <div className='thread-list'>
            {ThreadNodes}
        </div>
    )
}

export default ThreadList;