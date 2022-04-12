import React from 'react';
import User from './User';

const UserList = ({users, onDelete}) => {

    if(users.length === 0){
        return <p>Loading...</p>
    }

    const UserNodes = users.map((user, index) => {
        return (
                <div className='enemy-card' key={index}>
                    <User user={user} onDelete={onDelete}/>
                </div>
        )
    })

    return(
        <>
        <div className='monster-display'>
        <h1>Users</h1>
        <ul className='enemy-list'>
            {UserNodes}
        </ul>
        </div>
        </>
    )

}

export default UserList;