import React, {Fragment} from 'react';

const Thread = ({thread}) => {

    if(!thread){
        return <p>Loading...</p>
    }

    return(
        <Fragment>
            <h1>{thread.title}</h1>
            <h3>{thread.creator.username}</h3>
        </Fragment>
    )
}

export default Thread;