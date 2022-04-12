import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Assets from '../Assets';

const Thread = ({thread}) => {

    if(!thread){
        return <p>Loading...</p>
    }

    let url = "/forum/" + thread.id;

    return(
        <Fragment>
            <div className='thread-list-view'>
            <Link to={url}><h1>{thread.title}</h1></Link>
            <img src={Assets.Avatars[thread.creator.username]} width="50" alt="avatar"/>
            <h3>{thread.creator.username}</h3>
            </div>
        </Fragment>
    )
}

export default Thread;