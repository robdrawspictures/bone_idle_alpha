import React, {Fragment, useState, useEffect} from 'react';
import EnemyList from '../enemies/EnemyList.js';

const BestiaryContainer = ({enemies}) => {

    // const [enemies, setEnemies] = useState([])

    // const fetchEnemies =() => {
    //     fetch("http://localhost:8080/api/enemies")
    //     .then(response => response.json())
    //     .then(data => setEnemies(data))
    //     console.log("I'M GONNA FEEEEEETCH")
    // }

    // useEffect(() => {
    //     fetchEnemies();
    //     console.log('FETCH GET')
    // }, [])

    // const findEnemyById = (id) => {
    //     return enemies.find((enemy) =>{
    //       return enemy.id === parseInt(id);
    //     })
    //   }

    return(
            <div className='enemy-list'>
             <EnemyList enemies={enemies}/> 
            </div>
    )
}

export default BestiaryContainer;