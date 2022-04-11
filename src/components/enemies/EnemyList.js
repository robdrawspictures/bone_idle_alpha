import React from 'react';
import Enemy from './Enemy.js';

const EnemyList = ({enemies, onDelete}) => {

    if(enemies.length === 0){
        return <p>Loading...</p>
    }

    const EnemyNodes = enemies.map((enemy, index) => {
        return (
                <div className='enemy-card' key={index}>
                    <Enemy enemy={enemy} onDelete={onDelete}/>
                </div>
        )
    })

    return(
        <ul className='enemy-list'>
            {EnemyNodes}
        </ul>
    )

}

export default EnemyList;