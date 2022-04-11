import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from '../NavBar.js';
import GameContainer from './GameContainer.js';
import ForumContainer from './ForumContainer.js';
import EnemyDetail from '../enemies/EnemyDetail.js';
import EnemyList from '../enemies/EnemyList.js';
import NotFound from '../NotFound.js';
import EnemyForm from '../enemies/EnemyForm.js';
import Request from '../Request.js';


const MainContainer = () => {

    const [enemies, setEnemies] = useState([])

    const fetchEnemies =() => {
        fetch("http://localhost:8080/api/enemies")
        .then(response => response.json())
        .then(data => setEnemies(data))
    }

    useEffect(() => {
        fetchEnemies();
    }, [])

    const handlePost = (enemy) => {
        const request = new Request();
        const url = "http://localhost:8080/api/enemies"
        request.post(url, enemy)
        .then(() => {window.location = "/bestiary"})
      }

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<GameContainer enemies={enemies}/>}/>
        <Route path="/how-to-play"/>
        <Route path="/bestiary/:id" element={<EnemyDetail enemies={enemies}/>}/>
        <Route path="/bestiary/*" element={<><EnemyList enemies={enemies}/><EnemyForm onCreate={handlePost}/></>}/>
        <Route path="/forum/*" element={<ForumContainer/>}/>
        <Route path="/user"/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>


      </Fragment>
      </Router>
    )
}

export default MainContainer;