import React from "react";
import {Link} from 'react-router-dom';
import Enemy from "./Enemy";

const EnemyDetail = ({enemy}) => {
    
    if(!enemy){
        return <p>Loading...</p>
    }

    const backURL = "/bestiary";

    return(
        <div className="enemy-detail">
            <Enemy enemy={enemy}/>
            <h4>Base Hp: {enemy.hp}</h4>
            <h4>Type: {enemy.type}</h4>
            <h4>Bio go here.</h4>
            <Link to={backURL}><button>Back to Bestiary</button></Link>
        </div>
    )

}

export default EnemyDetail;
