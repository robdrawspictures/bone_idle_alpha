import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ThreadList from '../forum/ThreadList';

const ForumContainer = ({threads, posts, users}) => {
    
    // const [threads, setThreads] = useState([])

    // const fetchThreads = () => {
    //     fetch("http://localhost:8080/api/threads")
    //     .then(response => response.json())
    //     .then(data => setThreads(data))
    // }

    // useEffect(() => {
    //     fetchThreads();
    // }, [])

    return(
        <Fragment>
            <h1>Threads</h1>
             <ThreadList threads={threads} posts={posts} users={users}/>
        </Fragment>
    )
}

export default ForumContainer;