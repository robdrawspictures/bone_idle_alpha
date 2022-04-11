import React, {Fragment} from 'react';
import Assets from "../Assets.js";

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

  return (
    <Fragment>
    <img src={getEnemyImg(enemy) ? getEnemyImg(enemy) : Assets.Images.BitCorrupt} width="125" alt="enemy"/>
    <p>
    {enemy.name}
    </p>
    <button type="button" onClick={handleDelete}>Delete</button>
    </Fragment>
  )
}

export default Enemy;
