import React from 'react';
import Thread from './Thread.js';
import {Link} from 'react-router-dom';

const ThreadList = ({threads}) => {

    if(threads.length === 0){
        return <p>Loading...</p>
    }

    const ThreadNodes = threads.map((thread, index) => {
        const threadURL = "/threads/" + thread.id;
        return (
            <li key={index} className="thread-list-item">
                <Thread thread={thread}/>
                <Link to={threadURL}>{thread.title}</Link>
            </li>
        )
    })

    return(
        <ul className='thread-list'>
            {ThreadNodes}
        </ul>
    )
}

export default ThreadList;