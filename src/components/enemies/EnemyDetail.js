import React from "react";
import {Link, useParams} from 'react-router-dom';
import Assets from "../Assets";
import Enemy from "./Enemy";

const EnemyDetail = ({enemies}) => {

    const params = useParams();

    if(!enemies){
        return<p>Loading...</p>
    }

    const findEnemyById = (id) => {
        return enemies.find((enemy) =>{
          return enemy.id === parseInt(id);
        })
      }

    let enemy = findEnemyById(params.id);

    const backURL = "/bestiary";

    return(
        <div className="enemy-detail">
            <h1>{enemy.name}</h1>
            <div className="enemy-detail-container">
                <div className="enemy-detail-img">
                    <img src={Assets.Images[enemy.name]} alt="enemy"/>
                </div>
                <div className="enemy-detail-info">
                    <div className="enemy-detail-stats">
                        <h4>No.{enemy.id}</h4>
                        <h4>Base Hp: {enemy.hp}</h4>
                        <h4>Type: {enemy.type}</h4>
                    </div>
                    <hr/>
                    <div className="enemy-detail-bio">
                        <h4>{enemy.bio}</h4>
                    </div>
                </div>
            </div>
            <Link to={backURL}><button>Back to Bestiary</button></Link>
        </div>
    )

}

export default EnemyDetail;
