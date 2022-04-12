import React from 'react';
import Enemy from './Enemy.js';

const EnemyList = ({enemies, onDelete}) => {

    if(enemies.length === 0){
        return <p>Loading...</p>
    }

    const monsters = enemies.filter(enemy => enemy.type === "MONSTER")

    const EnemyNodes = monsters.map((enemy, index) => {
        return (
                <div className='enemy-card' key={index}>
                    <Enemy enemy={enemy} onDelete={onDelete}/>
                </div>
        )
    })

    const bosses = enemies.filter(enemy => enemy.type === "BOSS")

    const BossNodes = bosses.map((enemy, index) => {
        return (
                <div className='enemy-card' key={index}>
                    <Enemy enemy={enemy} onDelete={onDelete}/>
                </div>
        )
    })

    return(
        <>
        <div className='monster-display'>
        <h1>Monsters</h1>
        <ul className='enemy-list'>
            {EnemyNodes}
        </ul>
        <br/>
        <h1>Bosses</h1>
        <ul className='enemy-list'>
            {BossNodes}
        </ul>
        </div>
        </>
    )

}

export default EnemyList;