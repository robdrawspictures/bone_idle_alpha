import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const ForumContainer = () => {
    
    const [threads, setThreads] = useState([])

    useEffect(() => {
        fetchThreads();
    }, [])

    const fetchThreads = () => {
        fetch("http://localhost:8080/api/threads")
        .then(response => response.json())
        .then(data => setThreads(data))
        console.log(threads);
    }

    return(
        <Fragment>
            <Routes>
                <Route render={() => {
                    return <ThreadList threads={threads}/>
                }}/>
            </Routes>
        </Fragment>
    )
}

export default ForumContainer;