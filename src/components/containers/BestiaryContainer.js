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
        console.log(enemies);
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
            <h1>I'm the enemy list.</h1>
            <Routes>
                <Route exact path ="/bestiary/:id" render={(props) => {
                const id = props.match.params.id;
                const enemy = findEnemyById(id);
                return <EnemyDetail enemy={enemy}/>
                }}/>
                <Route render={() => {
                    return <EnemyList enemies={enemies}/>
                }}/>
            </Routes>
            </Fragment>
    )
}

export default BestiaryContainer;