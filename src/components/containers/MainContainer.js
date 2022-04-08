import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Game from "../game/Game.js";
import BestiaryContainer from './BestiaryContainer.js';
import ForumContainer from './ForumContainer.js';
import EnemyDetail from '../enemies/EnemyDetail.js';
import EnemyList from '../enemies/EnemyList.js';


const MainContainer = () => {

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

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Game />}/>
        <Route path="/how-to-play"/>
        <Route path="/bestiary/:id" element={<EnemyDetail enemies={enemies}/>}/>
        <Route path="/bestiary/*" element={<EnemyList enemies={enemies}/>}/>
        <Route path="/forum/*" element={<ForumContainer/>}/>
        <Route path="/user"/>
      </Routes>


      </Fragment>
      </Router>
    )
}

export default MainContainer;