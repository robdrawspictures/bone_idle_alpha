import React from 'react';
import Game from '../game/Game';

const GameContainer = ({enemies}) => {

    if(enemies.length === 0){
        return <p>Loading...</p>
    }

    return(
        <Game enemies={enemies}/>
    )


}

export default GameContainer;