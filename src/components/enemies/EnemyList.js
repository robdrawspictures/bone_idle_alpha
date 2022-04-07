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
            <li key={index} className="enemy-list-item">
                <div className='component'>
                    <Enemy enemy={enemy}/>
                    <Link to={enemyURL}><button type="button">Details</button></Link>
                </div>
            </li>
        )
    })

    return(
        <ul className='enemy-list'>
            {EnemyNodes}
        </ul>
    )

}

export default EnemyList;