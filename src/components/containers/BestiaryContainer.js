import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EnemyList from '../enemies/EnemyList.js';
import EnemyDetail from '../enemies/EnemyDetail.js';

const BestiaryContainer = () => {

    const [enemies, setEnemies] = useState([])

    const fetchEnemies =() => {
        fetch("http://localhost:8080/api/enemies")
        .then(response => response.json())
        .then(data => setEnemies(data))
        console.log("I'M GONNA FEEEEEETCH")
    }

    useEffect(() => {
        fetchEnemies();
        console.log('FETCH GET')
    }, [])

    const findEnemyById = (id) => {
        return enemies.find((enemy) =>{
          return enemy.id === parseInt(id);
        })
      }

    return(
            <Fragment>
            <div className='enemy-list'>
             <EnemyList enemies={enemies}/> 
            </div>
            </Fragment>
    )
}

export default BestiaryContainer;