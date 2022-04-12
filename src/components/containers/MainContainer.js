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
import HowToPlay from '../HowToPlay.js';
import UserList from '../forum/UserList.js';
import UserDetail from '../forum/UserDetail.js';
import UserForm from '../forum/UserForm';


const MainContainer = () => {

    const [enemies, setEnemies] = useState([])
    const [users, setUsers] = useState([])

    const fetchEnemies =() => {
        fetch("http://localhost:8080/api/enemies")
        .then(response => response.json())
        .then(data => setEnemies(data))
    }

    const fetchUsers = () => {
        fetch("http://localhost:8080/api/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }

    useEffect(() => {
        fetchEnemies();
        fetchUsers();
    }, [])

    const handlePost = (enemy) => {
        const request = new Request();
        const url = "http://localhost:8080/api/enemies"
        request.post(url, enemy)
        .then(() => {window.location = "/bestiary"})
      }

    const handleCreateAccount = (user) => {
        const request = new Request();
        const url = "http://localhost:8080/api/users"
        request.post(url, user)
        .then(() => {window.location = "/users"})
    }

    const handleEdit = (enemy) => {
        console.log(enemy.bio);
        const request = new Request();
        request.patch("http://localhost:8080/api/enemies/" + enemy.id, enemy)
        .then(() => {
          window.location = "/bestiary/" + enemy.id;
        })
      }
    
    const handleDelete = (enemy) => {
        const request = new Request();
        request.delete("http://localhost:8080/api/enemies/" + enemy.id)
        .then(() => {window.location = "/bestiary"})
    }

    const handleDeleteAccount = (user) => {
        const request = new Request();
        request.delete("http://localhost:8080/api/users/" + user.id)
        .then(() => {window.location = "/users"})
    }

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<GameContainer enemies={enemies}/>}/>
        <Route path="/faq" element={<HowToPlay/>}/>
        <Route path="/bestiary/:id" element={<EnemyDetail enemies={enemies} onEdit={handleEdit}/>}/>
        <Route path="/bestiary/*" element={<><EnemyList enemies={enemies} onDelete={handleDelete}/><EnemyForm onCreate={handlePost}/></>}/>
        <Route path="/forum/*" element={<ForumContainer/>}/>
        <Route path="/users" element={<UserList users={users} onDelete={handleDeleteAccount}/>}/>
        <Route path="/users/:id" element={<UserDetail users={users}/>}/>
        <Route path="/create" element={<UserForm onCreateAccount={handleCreateAccount}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>


      </Fragment>
      </Router>
    )
}

export default MainContainer;