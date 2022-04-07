import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Game from "../game/Game.js";
import BestiaryContainer from './BestiaryContainer.js';


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={Game()}/>
        <Route path="/how-to-play"/>
        <Route path="/bestiary/*" element={BestiaryContainer()}/>
        <Route path="/forum"/>
        <Route path="/user"/>
      </Routes>


      </Fragment>
      </Router>
    )
}

export default MainContainer;