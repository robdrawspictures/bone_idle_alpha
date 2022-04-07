import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EnemyList from '../enemies/EnemyList.js';

const BestiaryContainer = () => {

    const [enemies, setEnemies] = useState([])

    useEffect(() => {
        fetchEnemies();
    }, [])

    const fetchEnemies = () => {
        fetch("localhost:8000/api/enemies")
        .then(response => response.json())
        .then(data => setEnemies(data))
        console.log(enemies);
    }

    return(
        <Router>
            <>
            <Switch>
                <Route render={() => {
                    return <EnemyList enemyList={enemies}/>
                }}/>
            </Switch>
            </>
        </Router>
    )
}

export default BestiaryContainer;