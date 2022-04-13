import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from '../NavBar.js';
import GameContainer from './GameContainer.js';
import ForumContainer from './ForumContainer.js';
import Thread from '../forum/Thread.js';
import EnemyDetail from '../enemies/EnemyDetail.js';
import EnemyList from '../enemies/EnemyList.js';
import NotFound from '../NotFound.js';
import EnemyForm from '../enemies/EnemyForm.js';
import Request from '../Request.js';
import HowToPlay from '../HowToPlay.js';
import UserList from '../forum/UserList.js';
import UserDetail from '../forum/UserDetail.js';
import UserForm from '../forum/UserForm';
import ViewThread from '../forum/ViewThread.js';
import CreateThread from '../forum/CreateThread.js';
import CreatePost from '../forum/CreatePost.js';


const MainContainer = () => {

    const [enemies, setEnemies] = useState([])
    const [users, setUsers] = useState([])
    const [threads, setThreads] = useState([])
    const [posts, setPosts] = useState([])

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

    const fetchThreads = () => {
        fetch("http://localhost:8080/api/threads")
        .then(response => response.json())
        .then(data => setThreads(data))
        .then(console.log(threads))
    }

    const fetchPosts = () => {
        fetch("http://localhost:8080/api/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
        .then(console.log(posts))
    }

    useEffect(() => {
        fetchEnemies();
        fetchUsers();
        fetchPosts();
        fetchThreads();
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

    const handleCreateThread = (thread) => {
        const request = new Request();
        const url = "http://localhost:8080/api/threads"
        request.post(url, thread)
        .then(() => {window.location = "/forum"})
    }

    const handleCreatePost = (post) => {
        const request = new Request();
        const url = "http://localhost:8080/api/posts"
        request.post(url, post)
        .then(() => {window.location.reload()})
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
        <Route path="/forum" element={<><CreateThread users={users} onCreateThread={handleCreateThread}/><ForumContainer threads={threads} posts={posts} users={users}/></>}/>
        <Route path="/forum/:id" element={<><ViewThread threads={threads} posts={posts}/><CreatePost users={users} threads={threads} onCreatePost={handleCreatePost}/></>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>


      </Fragment>
      </Router>
    )
}

export default MainContainer;