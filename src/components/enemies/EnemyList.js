import React from 'react';
import Enemy from './Enemy.js';
import {Link} from 'react-router-dom';

const EnemyList = ({enemies}) => {

    if(enemies.length === 0){
        return <p>Loading...</p>
    }

    const EnemyNodes = enemies.map((enemy, index) => {
        const enemyURL = "/bestiary/" + enemy.id;
        return (
                <div className='enemy-card' key={index}>
                    <Enemy enemy={enemy}/>
                    <Link to={enemyURL}><button type="button">View</button></Link>
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