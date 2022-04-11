import React, {Fragment} from 'react';
import Assets from "../Assets.js";
import { Link } from 'react-router-dom';

const Enemy = ({enemy, onDelete}) => {

  if (!enemy){
    return <p>"Loading..."</p>
  }

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(enemy);
  }

  
  const getEnemyImg = (enemy) => {
    let imgSrc;
    let images = Assets.Images;
    let enemyName = enemy.name;
    for(let [name, src] of Object.entries(images)){
        if(name === enemyName){
             imgSrc = src;
        }
    }
      return imgSrc;
  }

  const enemyURL = "/bestiary/" + enemy.id;

  return (
    <Fragment>
    <img src={getEnemyImg(enemy) ? getEnemyImg(enemy) : Assets.Images.BitCorrupt} width="125" alt="enemy"/>
    <p>
    {enemy.name}
    </p>
    <Link to={enemyURL}><button type="button">View</button></Link>
    <button type="button" onClick={handleDelete}>Delete</button>
    </Fragment>
  )
}

export default Enemy;
