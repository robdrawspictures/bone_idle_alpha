import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/game" component={Game}/>
        <Route path="/how-to-play" component={FAQContainer}/>
        <Route path="/bestiary" component={BestiaryContainer}/>
        <Route path="/forum"/>
        <Route path="/user"/>
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;